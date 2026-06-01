import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authService } from "../../api/services/auth.service.ts";
import { useAuthContext } from "../../context/AuthContext.ts";
import { registerSchema, type RegisterFormValues } from "../../schemas/auth.ts";
import { ApiError } from "../../utils/apiErrors.ts";
import Button from "../ui/Button.tsx";
import Input from "../ui/Input.tsx";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const { setSession } = useAuthContext();
    const navigate = useNavigate();

    const {
        register,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur",
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleRegister = async (payload: RegisterFormValues) => {
        try {
            const { data } = await authService.register({
                username: payload.username,
                email: payload.email,
                password: payload.password,
            });
            setSession(data.token, data.user, data.refreshToken);

            navigate("/dashboard");
        } catch (error) {
            if (error instanceof ApiError) {
                if (error.statusCode === 400) {
                    setError("email", { message: error.message });
                    return;
                }
                setError("root", { message: error.message });
                return;
            }
        }
    };

    return (
        <form className="space-y-qp-stack" noValidate onSubmit={handleSubmit(handleRegister)}>
            {errors.root?.message ? (
                <p className="qp-error-text text-center" role="alert">
                    {errors.root.message}
                </p>
            ) : null}

            <Input
                label="Username"
                type="text"
                autoComplete="username"
                placeholder="johndoe"
                error={errors.username?.message}
                {...register("username")}
            />

            <Input
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                label="Password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                hint={errors.password?.message ? undefined : "Use at least 8 characters."}
                error={errors.password?.message}
                {...register("password")}
            />

            <Input
                label="Confirm password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
            />

            <Button type="submit" fullWidth isLoading={isSubmitting}>
                Create account
            </Button>

            <p className="text-center text-xs leading-relaxed text-qp-muted">
                By creating an account, you agree to our terms of service and privacy policy.
            </p>
        </form>
    );
}
