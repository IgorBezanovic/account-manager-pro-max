import React from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";

const AppHeader: React.FC = () => {
    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = (): void => {
        removeToken();
        setUser(undefined);
        // navigate("/signin", { replace: true });
        window.location.replace("/signin");
    };

    return (
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
                <IconButton href="/" sx={{ color: "inherit" }}>
                    {/* Logo or icon can go here */}
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
                        <Button variant="contained" color="secondary" onClick={handleLogout}>
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
    );
};

export default AppHeader;