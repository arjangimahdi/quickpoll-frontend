import { AxiosInstance } from "axios";
import { parseApiError } from "../../utils/apiErrors";

export function attachErrorInterceptor(client: AxiosInstance) {
    client.interceptors.response.use(
        (res) => res,
        (err) => Promise.reject(parseApiError(err)),
    );
}
