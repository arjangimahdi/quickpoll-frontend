import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthGuardSkeleton from "./AuthGuardSkeleton.tsx";

const GuestOnly = () => {
    const { isAuthenticated, isHydrating } = useAuthContext();

    if (isHydrating) {
        return <AuthGuardSkeleton variant="guest" />;
    }

    if (isAuthenticated) {
        return <Navigate to={"/dashboard"} replace />;
    }

    return <Outlet />;
};

export default GuestOnly;
