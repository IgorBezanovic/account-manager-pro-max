import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
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
  ]

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about Account Manager Pro Max</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
