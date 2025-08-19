import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  popular: boolean;
}

export const PricingSection: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Starter",
      subtitle: "For individuals & self-employed",
      price: "€29",
      features: [
        "Manage your own company",
        "Basic document storage",
        "Automated eUprava reporting",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Bookkeeper Lite",
      subtitle: "Up to 10 companies",
      price: "€79",
      features: [
        "Manage up to 10 clients",
        "Advanced reporting",
        "Priority email support",
        "Client communication tools",
      ],
      popular: false,
    },
    {
      name: "Bookkeeper Pro",
      subtitle: "Up to 50 companies",
      price: "€149",
      features: [
        "Manage up to 50 clients",
        "Team collaboration tools",
        "Dedicated account manager",
        "Premium support",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Unlimited",
      subtitle: "For large accounting firms",
      price: "€299",
      features: [
        "Unlimited companies",
        "White-label client portal",
        "Advanced integrations",
        "24/7 support",
        "Custom training",
      ],
      popular: false,
    },
  ];

  return (
    <Box component="section" id="pricing" sx={{ py: 10, bgcolor: "grey.100" }}>
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
            Choose the perfect plan for your business
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
            Flexible pricing options that scale with your accounting practice
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <Card
                sx={{
                  position: "relative",
                  border: plan.popular ? "2px solid" : "1px solid",
                  borderColor: plan.popular ? "primary.main" : "divider",
                  boxShadow: plan.popular ? 6 : 2,
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: 8,
                  },
                }}
              >
                {plan.popular && (
                  <Chip
                    label="Most Popular"
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontWeight: 500,
                    }}
                  />
                )}

                <CardHeader
                  sx={{ textAlign: "center", pt: 4 }}
                  title={
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "serif",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        color: "text.primary",
                      }}
                    >
                      {plan.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      {plan.subtitle}
                    </Typography>
                  }
                />

                <Box textAlign="center" mt={2}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "text.primary" }}>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    /month
                  </Typography>
                </Box>

                <CardContent sx={{ mt: 4 }}>
                  <Box component="ul" sx={{ listStyle: "none", p: 0, mb: 4 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <Box
                        component="li"
                        key={featureIndex}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.875rem",
                          color: "text.secondary",
                          mb: 1.5,
                        }}
                      >
                        <Box component="span" sx={{ color: "primary.main", mr: 1 }}>
                          ✓
                        </Box>
                        {feature}
                      </Box>
                    ))}
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    color={plan.popular ? "primary" : "secondary"}
                    sx={{
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        opacity: 0.9,
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};