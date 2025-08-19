import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Marija Petrović",
      role: "Senior Accountant, Belgrade",
      content:
        "Account Manager Pro Max has revolutionized how I manage my clients. The eUprava integration saves me hours every week!",
      avatar: "/placeholder-4nh3q.png",
    },
    {
      name: "Stefan Nikolić",
      role: "Accounting Firm Owner, Novi Sad",
      content:
        "We've increased our efficiency by 70% since switching to this platform. The client communication features are outstanding.",
      avatar: "/placeholder-yir90.png",
    },
    {
      name: "Ana Jovanović",
      role: "Freelance Bookkeeper, Niš",
      content:
        "As a freelancer, this tool gives me the professional edge I need. My clients love the transparency and real-time updates.",
      avatar: "/professional-bookkeeper-headshot.png",
    },
  ];

  return (
    <Box component="section" id="testimonials" sx={{ py: 10, bgcolor: "grey.100" }}>
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
            What our clients say
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
            Trusted by accounting professionals across Serbia
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      color: "text.primary",
                      mb: 4,
                      lineHeight: 1.6,
                    }}
                  >
                    “{testimonial.content}”
                  </Typography>

                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      src={testimonial.avatar || "/assets/placeholder.svg"}
                      alt={testimonial.name}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};