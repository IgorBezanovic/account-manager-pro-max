import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";

export const FinalCTASection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: "linear-gradient(to right, #3b82f6, #06b6d4)", // Replace with your theme's primary/accent if needed
        color: "#fff",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "serif",
              fontWeight: 900,
              fontSize: { xs: "2rem", lg: "3rem" },
              color: "primary.contrastText",
              mb: 3,
            }}
          >
            Start simplifying your accounting today!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.6,
              fontSize: "1.25rem",
            }}
          >
            Join thousands of Serbian accounting professionals who have already transformed their practice with Account Manager Pro Max.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              px: 6,
              py: 2,
              fontSize: "1.125rem",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            Try it Free
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              px: 6,
              py: 2,
              fontSize: "1.125rem",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#3b82f6",
              },
            }}
          >
            Contact Sales
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};