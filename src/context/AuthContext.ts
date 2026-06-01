import { createContext, useContext } from "react";
import { User } from "../types";

interface AuthContextValue {
    token: string;
    user: User | null;
    isHydrating: boolean;
    isAuthenticated: boolean;

    logout: () => void;
    setSession: (token: string, user: User, refreshToken?: string) => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuthContext(): AuthContextValue {
    const context = useContext(AuthContext);

    if (!context) throw new Error("useAuthContext must be within AuthProvider.");

    return context;
}
