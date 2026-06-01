import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
    hint?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, hint, id, className = "", ...props },
    ref
) {
    const inputId = id ?? props.name;

    return (
        <div>
            <label htmlFor={inputId} className="qp-label">
                {label}
            </label>
            <input
                ref={ref}
                id={inputId}
                className={`qp-input ${error ? "qp-input-error" : ""} ${className}`.trim()}
                aria-invalid={error ? true : undefined}
                aria-describedby={
                    error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
                }
                {...props}
            />
            {error ? (
                <p id={`${inputId}-error`} className="qp-error-text" role="alert">
                    {error}
                </p>
            ) : hint ? (
                <p id={`${inputId}-hint`} className="qp-hint">
                    {hint}
                </p>
            ) : null}
        </div>
    );
});

export default Input;
