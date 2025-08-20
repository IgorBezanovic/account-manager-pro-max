import React, { useState } from "react";
import {
    Box,
    Button,
    IconButton,
    Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar/Sidebar";

const AppHeader: React.FC = () => {
    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = (): void => {
        removeToken();
        setUser(undefined);
        toast.success("Successful logout");
        setTimeout(() => {
            window.location.replace("/home");
        }, 1000);
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 1,
                    bgcolor: "primary.main",
                }}
            >
                {/* Left side */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton
                        onClick={() => setSidebarOpen(true)}
                        sx={{ color: "white" }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {user && (
                        <Button
                            variant="text"
                            href="/home"
                            sx={{ textTransform: "none", color: "white" }}
                        >
                            ACCOUNT MANAGER
                        </Button>
                    )}
                </Box>

                {/* Right side */}
                <Stack direction="row" spacing={2}>
                    {user ? (
                        <>
                            <Button
                                variant="text"
                                href="/profile"
                                sx={{ textTransform: "none", color: "white" }}
                            >
                                {user.username}
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="text" href="/signin" sx={{ color: "white" }}>
                                Login
                            </Button>
                            <Button variant="contained" color="secondary" href="/signup">
                                Sign Up
                            </Button>
                        </>
                    )}
                </Stack>
            </Box>

            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
};

export default AppHeader;