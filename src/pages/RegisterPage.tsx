import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm.tsx";

export default function RegisterPage() {
    return (
        <>
            <header className="mb-6 text-center">
                <h1 className="qp-heading">Create your account</h1>
                <p className="mt-2 qp-subheading">Start building polls and share live voting links in seconds.</p>
            </header>

            <div className="qp-card">
                <RegisterForm />
            </div>

            <footer className="mt-6 text-center text-sm text-qp-muted">
                Already have an account?{" "}
                <Link to="/login" className="qp-link">
                    Sign in
                </Link>
            </footer>
        </>
    );
}
