import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/providers/AuthProvider.tsx";
import router from "./routes/router.tsx";

export default function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}
