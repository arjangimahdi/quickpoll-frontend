import type { User } from "../types";

const TOKEN_KEY = "quickpoll_token";
const REFRESH_TOKEN_KEY = "quickpoll_refresh_token";
const USER_KEY = "quickpoll_user";

export function getAuthTokenFromStorage(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function setAuthTokenToStorage(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
}

export function removeAuthTokenFromStorage(): void {
    localStorage.removeItem(TOKEN_KEY);
}

export function getRefreshTokenFromStorage(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function setRefreshTokenToStorage(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export function removeRefreshTokenFromStorage(): void {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function getAuthUserFromStorage(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;

    try {
        return JSON.parse(raw) as User;
    } catch {
        return null;
    }
}

export function setAuthUserToStorage(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function removeAuthUserFromStorage(): void {
    localStorage.removeItem(USER_KEY);
}

export function setAuthSessionToStorage(token: string, user: User, refreshToken?: string): void {
    setAuthTokenToStorage(token);
    setAuthUserToStorage(user);
    if (refreshToken) setRefreshTokenToStorage(refreshToken);
}

export function clearAuthSessionFromStorage(): void {
    removeAuthTokenFromStorage();
    removeRefreshTokenFromStorage();
    removeAuthUserFromStorage();
}
