import { Link, Outlet } from "react-router-dom";
import { ASSETS } from "../lib/assets.ts";

export default function AuthLayout() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-qp-section">
            <Link
                to="/"
                className="mb-8 block rounded-qp transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-qp-primary/40 focus:ring-offset-2 focus:ring-offset-qp-bg"
                aria-label="QuickPoll home"
            >
                <img src={ASSETS.logoLight} alt="QuickPoll" className="h-10 w-auto" />
            </Link>

            <div className="w-full max-w-md">
                <Outlet />
            </div>
        </div>
    );
}
