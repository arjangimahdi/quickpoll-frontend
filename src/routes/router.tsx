import { createBrowserRouter } from "react-router-dom";
import CreatePollPage from "../pages/CreatePollPage.tsx";
import DashboardPage from "../pages/DashboardPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import PollDetailPage from "../pages/PollDetailPage.tsx";
import PollListPage from "../pages/PollListPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import AuthRequired from "../components/auth/AuthRequired.tsx";
import GuestOnly from "../components/auth/GuestOnly.tsx";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/polls", element: <PollListPage /> },
            { path: "/polls/:id", element: <PollDetailPage /> },
            {
                element: <AuthRequired />,
                children: [
                    { path: "/dashboard", element: <DashboardPage /> },
                    { path: "/polls/new", element: <CreatePollPage /> },
                ],
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                element: <GuestOnly />,
                children: [
                    { path: "/login", element: <LoginPage /> },
                    { path: "/register", element: <RegisterPage /> },
                ],
            },
        ],
    },
]);

export default router;
