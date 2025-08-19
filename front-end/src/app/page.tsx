import React from "react";
import { Box, CssBaseline } from "@mui/material";

// Section components
import { FAQSection } from "../components/faq-section";
import { FeaturesSection } from "../components/features-section";
import { FinalCTASection } from "../components/final-cta-section";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { PricingSection } from "../components/pricing-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { WhyChooseUsSection } from "../components/why-choose-us-section";

const LandingPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;