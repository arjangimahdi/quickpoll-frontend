import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm.tsx";

export default function LoginPage() {
    return (
        <>
            <header className="mb-6 text-center">
                <h1 className="qp-heading">Welcome back</h1>
                <p className="mt-2 qp-subheading">Sign in to manage your polls and live results.</p>
            </header>

            <div className="qp-card">
                <LoginForm />
            </div>

            <footer className="mt-6 text-center text-sm text-qp-muted">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="qp-link">
                    Create one
                </Link>
            </footer>
        </>
    );
}
