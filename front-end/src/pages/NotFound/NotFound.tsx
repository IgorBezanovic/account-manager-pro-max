// src/pages/NotFound/NotFound.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ textAlign: "center", mt: 10 }}>
            <Typography variant="h2" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Oops! Page not found.
            </Typography>
            <Button variant="contained" onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;