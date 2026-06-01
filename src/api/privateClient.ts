import { createBaseClient } from "./client";
import { attachAuthInterceptor } from "./interceptors/auth";
import { attachErrorInterceptor } from "./interceptors/error";

export const privateClient = createBaseClient();

attachErrorInterceptor(privateClient);
attachAuthInterceptor(privateClient);
