import { Route, Routes } from "react-router-dom";
import CreatePollPage from "../pages/CreatePollPage.tsx";
import DashboardPage from "../pages/DashboardPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import PollDetailPage from "../pages/PollDetailPage.tsx";
import PollListPage from "../pages/PollListPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/polls" element={<PollListPage />} />
            <Route path="/polls/new" element={<CreatePollPage />} />
            <Route path="/polls/:id" element={<PollDetailPage />} />
        </Routes>
    );
}
