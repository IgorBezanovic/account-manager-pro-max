import React from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    CssBaseline,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Link,
} from "@mui/material";

const HomePage: React.FC = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box sx={{ minHeight: "80vh", bgcolor: "background.default" }}>
            <CssBaseline />

            {/* Navbar */}


            {/* Main Content */}
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                    Welcome to MyApp
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Container>
        </Box>
    );
};

export default HomePage;