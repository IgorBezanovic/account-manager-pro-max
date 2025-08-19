import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Easy Company Management",
      description:
        "Organize and manage all your client companies in one centralized dashboard with intuitive tools.",
      icon: "🏢",
    },
    {
      title: "Direct Communication",
      description:
        "Seamless communication between companies and accountants with built-in messaging and file sharing.",
      icon: "💬",
    },
    {
      title: "Automated eUprava Reporting",
      description:
        "Automatically generate and submit reports to Serbian government systems with 100% compliance.",
      icon: "📊",
    },
    {
      title: "Secure Cloud Storage",
      description:
        "Store all your documents securely in the cloud with enterprise-grade encryption and backup.",
      icon: "☁️",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Get insights into your business with comprehensive financial reports and analytics.",
      icon: "📈",
    },
    {
      title: "Financial Reports",
      description:
        "Generate professional financial reports and statements with just a few clicks.",
      icon: "📋",
    },
  ];

  return (
    <Box component="section" id="features" sx={{ py: 10, bgcolor: "background.default" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "serif",
              fontWeight: 700,
              fontSize: { xs: "2rem", lg: "2.5rem" },
              color: "text.primary",
              mb: 2,
            }}
          >
            Everything you need to manage your accounting business
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.25rem",
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Powerful features designed specifically for Serbian bookkeepers and accounting firms
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card
                elevation={3}
                sx={{
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                <CardHeader
                  title={
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h3" sx={{ fontSize: "2rem" }}>
                        {feature.icon}
                      </Typography>
                    </Box>
                  }
                  subheader={
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "serif",
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};