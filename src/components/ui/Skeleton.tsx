type SkeletonProps = {
    className?: string;
};

export default function Skeleton({ className = "" }: SkeletonProps) {
    return <div className={`qp-skeleton ${className}`.trim()} aria-hidden="true" />;
}
