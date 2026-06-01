import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthGuardSkeleton from "./AuthGuardSkeleton.tsx";

const AuthRequired = () => {
    const { isHydrating, isAuthenticated } = useAuthContext();
    const location = useLocation();

    if (isHydrating) {
        return <AuthGuardSkeleton variant="app" />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <Outlet />;
};

export default AuthRequired;
