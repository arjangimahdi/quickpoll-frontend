import axios, { CreateAxiosDefaults } from "axios";

export function createBaseClient(overrides?: CreateAxiosDefaults) {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        timeout: 10_000,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        ...overrides,
    });
}
