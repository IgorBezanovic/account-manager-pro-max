import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { getValidToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import LandingPage from "./app/page";
import NotFound from "./pages/NotFound/NotFound";
import PlateCalculator from "./pages/PlateCalculator/PlateCalculator";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={!getValidToken() ? <SignIn /> : <Navigate to="/home" />} />
            <Route path="/signup" element={!getValidToken() ? <SignUp /> : <Navigate to="/home" />} />
            <Route
                path="/profile"
                element={getValidToken() ? <Profile /> : <Navigate to="/signin" />}
            />
            <Route
                path="/home"
                element={getValidToken() ? <Home /> : <Navigate to="/signin" />}
            />
            <Route
                path="/plate"
                element={getValidToken() ? <PlateCalculator /> : <Navigate to="/signin" />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;