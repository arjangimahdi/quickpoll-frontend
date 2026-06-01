import { createBaseClient } from "./client";
import { attachErrorInterceptor } from "./interceptors/error";

export const publicClient = createBaseClient();

attachErrorInterceptor(publicClient);
