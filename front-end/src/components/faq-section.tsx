import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQ {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How much does Account Manager Pro Max cost?",
      answer:
        "We offer flexible pricing starting from €29/month for individuals. Our plans scale with your business needs, from managing your own company to unlimited clients for large firms.",
    },
    {
      question: "Is my data secure and compliant with Serbian regulations?",
      answer:
        "Yes, absolutely. We use enterprise-grade encryption and are fully compliant with Serbian data protection laws and accounting regulations. All data is stored securely in EU-based servers.",
    },
    {
      question: "How does the eUprava integration work?",
      answer:
        "Our platform automatically generates and submits required reports to Serbian government systems. You simply input your data, and we handle the formatting and submission process according to current regulations.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time with no cancellation fees. Your data remains accessible for 30 days after cancellation to allow for smooth transition.",
    },
    {
      question: "Do you offer training and support?",
      answer:
        "We provide comprehensive onboarding, video tutorials, and email support for all plans. Pro and Unlimited plans include dedicated account managers and priority support.",
    },
    {
      question: "Can I import data from my existing accounting software?",
      answer:
        "Yes, we support data import from most popular accounting software used in Serbia. Our team can assist with the migration process to ensure a smooth transition.",
    },
  ];

  return (
    <Box component="section" id="faq" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="md">
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
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.25rem",
              color: "text.secondary",
            }}
          >
            Everything you need to know about Account Manager Pro Max
          </Typography>
        </Box>

        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, borderRadius: 2, border: "1px solid", borderColor: "divider" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                fontWeight: 600,
                color: "text.primary",
                "& .MuiAccordionSummary-content": {
                  marginY: 1,
                },
              }}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};