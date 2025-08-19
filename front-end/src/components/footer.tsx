import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
} from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", borderTop: 1, borderColor: "divider", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "primary.main",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "primary.contrastText", fontWeight: "bold" }}
                  >
                    AM
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "serif", fontWeight: "bold", color: "text.primary" }}
                >
                  Account Manager Pro Max
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                The ultimate accounting solution for Serbian professionals.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Product
            </Typography>
            <Stack spacing={1}>
              <Link href="#features" color="text.secondary" underline="hover">
                Features
              </Link>
              <Link href="#pricing" color="text.secondary" underline="hover">
                Pricing
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                Integrations
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                API
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="text.secondary" underline="hover">
                About Us
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                Privacy Policy
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                Terms of Service
              </Link>
              <Link href="#contact" color="text.secondary" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Connect
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="text.secondary" underline="hover" aria-label="LinkedIn">
                💼
              </Link>
              <Link href="#" color="text.secondary" underline="hover" aria-label="Twitter">
                🐦
              </Link>
              <Link href="#" color="text.secondary" underline="hover" aria-label="Facebook">
                📘
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: "divider", mt: 6, pt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 Account Manager Pro Max. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};