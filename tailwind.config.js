/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                qp: {
                    bg: "#0f172a",
                    surface: "#1e293b",
                    "surface-raised": "#334155",
                    border: "#475569",
                    text: "#f8fafc",
                    muted: "#94a3b8",
                    primary: "#6366f1",
                    "primary-hover": "#4f46e5",
                    "primary-muted": "#312e81",
                    danger: "#f87171",
                    "danger-muted": "#7f1d1d",
                },
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                ],
            },
            borderRadius: {
                qp: "0.75rem",
            },
            boxShadow: {
                qp: "0 4px 24px rgba(15, 23, 42, 0.45)",
            },
            spacing: {
                "qp-section": "1.5rem",
                "qp-stack": "1rem",
            },
        },
    },
    plugins: [],
};
