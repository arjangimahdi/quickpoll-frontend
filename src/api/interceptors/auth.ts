import { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { authService } from "../services/auth.service";
import {
    clearAuthSessionFromStorage,
    getAuthTokenFromStorage,
    getRefreshTokenFromStorage,
    setAuthTokenToStorage,
    setRefreshTokenToStorage,
} from "../../utils/authStorage";

interface RetryableRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

type FailedQueueEntry = {
    resolve: (token: string) => void;
    reject: (err: unknown) => void;
};

let isRefreshing = false;
let failedQueue: FailedQueueEntry[] = [];

function processQueue(error: unknown, token: string | null) {
    failedQueue.forEach(({ resolve, reject }) => {
        if (error) reject(error);
        else resolve(token!);
    });
    failedQueue = [];
}

function logoutAndRedirect() {
    clearAuthSessionFromStorage();
    window.location.href = "/login";
}

export function attachAuthInterceptor(client: AxiosInstance) {
    client.interceptors.request.use((config) => {
        const token = getAuthTokenFromStorage();

        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
    });

    client.interceptors.response.use(
        (response) => response,
        async (error) => {
            const original = error.config as RetryableRequestConfig | undefined;

            if (error.response?.status === 401 && original && !original._retry) {
                if (isRefreshing) {
                    return new Promise<string>((resolve, reject) => {
                        failedQueue.push({ resolve, reject });
                    }).then((token) => {
                        original.headers.Authorization = `Bearer ${token}`;
                        return client(original);
                    });
                }

                original._retry = true;
                isRefreshing = true;

                try {
                    if (!getRefreshTokenFromStorage()) {
                        processQueue(error, null);
                        logoutAndRedirect();
                        return Promise.reject(error);
                    }

                    const { token: newToken, refreshToken: newRefreshToken } = await authService.refresh();

                    setAuthTokenToStorage(newToken);
                    setRefreshTokenToStorage(newRefreshToken);
                    processQueue(null, newToken);
                    original.headers.Authorization = `Bearer ${newToken}`;
                    return client(original);
                } catch (refreshError) {
                    processQueue(refreshError, null);
                    logoutAndRedirect();
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            }

            return Promise.reject(error);
        },
    );

    return client;
}
