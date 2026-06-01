import { useAuthContext } from "../context/AuthContext";

export default function DashboardPage() {
    const { user } = useAuthContext();

    return <div>{user?.email}</div>;
}
