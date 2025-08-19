import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const WhyChooseUsSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: "Save Time with Automation",
      description: "Reduce manual work by up to 80% with our intelligent automation tools",
      icon: "⏰",
    },
    {
      title: "Improve Client Collaboration",
      description: "Enhanced communication tools that keep you and your clients connected",
      icon: "🤝",
    },
    {
      title: "100% Serbian Compliance",
      description: "Fully compliant with all Serbian accounting regulations and eUprava requirements",
      icon: "🇷🇸",
    },
    {
      title: "Scalable Solution",
      description: "Perfect for freelancers and large firms - grows with your business",
      icon: "📈",
    },
  ];

  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
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
            Why choose Account Manager Pro Max?
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
            Join thousands of Serbian accounting professionals who trust our platform
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <Box textAlign="center" sx={{ px: 2 }}>
                <Typography variant="h3" sx={{ fontSize: "3rem", mb: 2 }}>
                  {benefit.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "serif",
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 1,
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};