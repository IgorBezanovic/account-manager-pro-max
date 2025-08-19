import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import LandingPage from "./app/page";
import NotFound from "./pages/NotFound/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
                path="/profile"
                element={getToken() ? <Profile /> : <Navigate to="/signin" />}
            />
            <Route
                path="/home"
                element={getToken() ? <Home /> : <Navigate to="/signin" />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;