import { User } from "../../types";
import { getRefreshTokenFromStorage } from "../../utils/authStorage";
import { publicClient } from "../publicClient";

type RegisterPayload = {
    username: string;
    email: string;
    password: string;
};

interface AuthTokensResponse {
    token: string;
    refreshToken: string;
}

interface RegisterResponse extends AuthTokensResponse {
    user: User;
}

export const authService = {
    register: (payload: RegisterPayload) => publicClient.post<RegisterResponse>("/auth/register", payload),

    refresh: async () => {
        const refreshToken = getRefreshTokenFromStorage();
        if (!refreshToken) {
            throw new Error("No refresh token");
        }

        const { data } = await publicClient.post<AuthTokensResponse>("/auth/refresh", { refreshToken });
        return data;
    },
};
