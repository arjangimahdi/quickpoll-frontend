import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ASSETS } from "../../lib/assets.ts";

type AuthLayoutProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
    footer: ReactNode;
};

export default function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-qp-section">
            <Link
                to="/"
                className="mb-8 block transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-qp-primary/40 focus:ring-offset-2 focus:ring-offset-qp-bg rounded-qp"
                aria-label="QuickPoll home"
            >
                <img
                    src={ASSETS.logoLight}
                    alt="QuickPoll"
                    className="h-10 w-auto"
                />
            </Link>

            <div className="w-full max-w-md">
                <header className="mb-6 text-center">
                    <h1 className="qp-heading">{title}</h1>
                    <p className="mt-2 qp-subheading">{subtitle}</p>
                </header>

                <div className="qp-card">{children}</div>

                <footer className="mt-6 text-center text-sm text-qp-muted">{footer}</footer>
            </div>
        </div>
    );
}
