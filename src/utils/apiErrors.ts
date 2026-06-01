import { AxiosError } from "axios";

export interface ApiErrorPayload {
    message: string;
    code?: string;
    fieldErrors?: Record<string, string[]>;
}

export class ApiError extends Error {
    public statusCode: number;
    public payload: ApiErrorPayload;

    constructor(statusCode: number, payload: ApiErrorPayload) {
        super(payload.message);
        this.statusCode = statusCode;
        this.payload = payload;
    }
}

export function parseApiError(error: unknown): ApiError {
    if (error instanceof AxiosError && error.response) {
        const { status, data } = error.response;
        return new ApiError(status, {
            message: data?.message ?? "Something went wrong",
            code: data?.code,
            fieldErrors: data?.errors,
        });
    }
    return new ApiError(0, { message: "Network error — check your connection" });
}
