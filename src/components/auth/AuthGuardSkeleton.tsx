import Skeleton from "../ui/Skeleton.tsx";

type AuthGuardSkeletonProps = {
    variant: "guest" | "app";
};

function GuestAuthSkeleton() {
    return (
        <div className="w-full" aria-busy="true" aria-label="Loading">
            <header className="mb-6 space-y-2 text-center">
                <Skeleton className="mx-auto h-8 w-48" />
                <Skeleton className="mx-auto h-4 w-64" />
            </header>

            <div className="qp-card space-y-qp-stack">
                <div className="space-y-1.5">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-1.5">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-1.5">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-full" />
            </div>

            <footer className="mt-6 flex justify-center">
                <Skeleton className="h-4 w-52" />
            </footer>
        </div>
    );
}

function AppAuthSkeleton() {
    return (
        <div className="w-full max-w-2xl px-4 py-8" aria-busy="true" aria-label="Loading">
            <Skeleton className="mb-2 h-8 w-56" />
            <Skeleton className="mb-8 h-4 w-40" />

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="qp-card space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="qp-card space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </div>
        </div>
    );
}

export default function AuthGuardSkeleton({ variant }: AuthGuardSkeletonProps) {
    return variant === "guest" ? <GuestAuthSkeleton /> : <AppAuthSkeleton />;
}
