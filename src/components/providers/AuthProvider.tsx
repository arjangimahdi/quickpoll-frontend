import { User } from "../../types";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
    clearAuthSessionFromStorage,
    getAuthTokenFromStorage,
    getAuthUserFromStorage,
    setAuthSessionToStorage,
} from "../../utils/authStorage";

interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [token, setToken] = useState<string>("");
    const [user, setUser] = useState<User | null>(null);
    const [isHydrating, setIsHydrating] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logout = useCallback(() => {
        clearAuthSessionFromStorage();
        setToken("");
        setUser(null);
        setIsAuthenticated(false);
    }, []);

    const setSession = useCallback((_token: string, _user: User, refreshToken?: string) => {
        if (!_token || !_user) return;

        setAuthSessionToStorage(_token, _user, refreshToken);
        setToken(_token);
        setUser(_user);
        setIsAuthenticated(true);
    }, []);

    useEffect(() => {
        const storedToken = getAuthTokenFromStorage();
        const storedUser = getAuthUserFromStorage();

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(storedUser);
            setIsAuthenticated(true);
        } else if (storedToken) {
            clearAuthSessionFromStorage();
        }

        setIsHydrating(false);
    }, []);

    const value = useMemo(
        () => ({ user, token, isAuthenticated, isHydrating, logout, setSession }),
        [user, token, isAuthenticated, isHydrating, logout, setSession],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
