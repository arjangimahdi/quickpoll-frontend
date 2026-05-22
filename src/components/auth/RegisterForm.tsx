import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout.tsx";
import Button from "../ui/Button.tsx";
import Input from "../ui/Input.tsx";

export default function RegisterForm() {
    return (
        <AuthLayout
            title="Create your account"
            subtitle="Start building polls and share live voting links in seconds."
            footer={
                <>
                    Already have an account?{" "}
                    <Link to="/login" className="qp-link">
                        Sign in
                    </Link>
                </>
            }
        >
            <form className="space-y-qp-stack" noValidate>
                <Input
                    label="Username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    placeholder="johndoe"
                    required
                />

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                />

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    hint="Use at least 8 characters."
                    required
                />

                <Input
                    label="Confirm password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    required
                />

                <Button type="submit" fullWidth>
                    Create account
                </Button>

                <p className="text-center text-xs leading-relaxed text-qp-muted">
                    By creating an account, you agree to our terms of service and
                    privacy policy.
                </p>
            </form>
        </AuthLayout>
    );
}
