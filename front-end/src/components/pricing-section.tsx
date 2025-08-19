import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      subtitle: "For individuals & self-employed",
      price: "€29",
      features: ["Manage your own company", "Basic document storage", "Automated eUprava reporting", "Email support"],
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
  ]

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Choose the perfect plan for your business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options that scale with your accounting practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-card border-border ${plan.popular ? "ring-2 ring-primary" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-serif font-bold text-2xl text-card-foreground">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
