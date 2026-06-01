import Button from "../ui/Button.tsx";
import Input from "../ui/Input.tsx";

export default function LoginForm() {
    return (
        <form className="space-y-qp-stack" noValidate>
            <Input
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
            />

            <div>
                <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="password" className="qp-label mb-0">
                        Password
                    </label>
                    <a href="#" className="text-xs font-medium text-qp-primary hover:text-indigo-300">
                        Forgot password?
                    </a>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="qp-input"
                    required
                />
            </div>

            <label className="flex cursor-pointer items-center gap-2.5">
                <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-qp-border bg-qp-surface text-qp-primary focus:ring-qp-primary/30"
                />
                <span className="text-sm text-qp-muted">Remember me</span>
            </label>

            <Button type="submit" fullWidth>
                Sign in
            </Button>
        </form>
    );
}
