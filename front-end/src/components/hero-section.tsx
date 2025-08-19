import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

export const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, lg: 16 },
        background: "linear-gradient(to bottom right, #f5f5f5, #e0e0e0)", // Replace with theme if needed
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }} >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "serif",
                  fontWeight: 900,
                  fontSize: { xs: "2rem", lg: "3.75rem" },
                  color: "text.primary",
                  lineHeight: 1.2,
                }}
              >
                The ultimate app for accountants and companies in Serbia
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.25rem",
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                Simplify your work with clients, automate reporting to eUprava,
                and manage everything from one place.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: "1.125rem",
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: "1.125rem",
                    backgroundColor: "transparent",
                  }}
                >
                  View Pricing
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 4,
                padding: 4,
                backgroundColor: "background.paper",
              }}
            >
              <Box
                component="img"
                src="/assets/modern-accountant-automation.png"
                alt="Accountant working with automated tools"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};