import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: "qp-btn-primary",
    ghost: "qp-btn-ghost",
};

export default function Button({
    variant = "primary",
    fullWidth = false,
    className = "",
    type = "button",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
}
