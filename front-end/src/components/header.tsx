import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const Header: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        borderBottom: 1,
        borderColor: "divider",
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 2, justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
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
          </Box>

          {isDesktop && (
            <Box display="flex" alignItems="center" gap={4}>
              <Link href="#features" color="text.secondary" underline="hover">
                Features
              </Link>
              <Link href="#pricing" color="text.secondary" underline="hover">
                Pricing
              </Link>
              <Link href="#testimonials" color="text.secondary" underline="hover">
                Testimonials
              </Link>
              <Link href="#faq" color="text.secondary" underline="hover">
                FAQ
              </Link>
              <Link href="#contact" color="text.secondary" underline="hover">
                Contact
              </Link>
            </Box>
          )}

          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};