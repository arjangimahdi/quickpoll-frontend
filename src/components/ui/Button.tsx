import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    isLoading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: "qp-btn-primary",
    ghost: "qp-btn-ghost",
};

export default function Button({
    variant = "primary",
    fullWidth = false,
    isLoading = false,
    className = "",
    type = "button",
    disabled,
    children,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || isLoading;

    return (
        <button
            type={type}
            disabled={isDisabled}
            aria-busy={isLoading || undefined}
            className={`${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${isLoading ? "relative" : ""} ${className}`.trim()}
            {...props}
        >
            {isLoading ? (
                <span className="inline-flex items-center justify-center gap-2">
                    <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                        aria-hidden="true"
                    />
                    <span>{children}</span>
                </span>
            ) : (
                children
            )}
        </button>
    );
}
