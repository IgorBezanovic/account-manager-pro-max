import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Easy Company Management",
      description: "Organize and manage all your client companies in one centralized dashboard with intuitive tools.",
      icon: "🏢",
    },
    {
      title: "Direct Communication",
      description: "Seamless communication between companies and accountants with built-in messaging and file sharing.",
      icon: "💬",
    },
    {
      title: "Automated eUprava Reporting",
      description: "Automatically generate and submit reports to Serbian government systems with 100% compliance.",
      icon: "📊",
    },
    {
      title: "Secure Cloud Storage",
      description: "Store all your documents securely in the cloud with enterprise-grade encryption and backup.",
      icon: "☁️",
    },
    {
      title: "Analytics Dashboard",
      description: "Get insights into your business with comprehensive financial reports and analytics.",
      icon: "📈",
    },
    {
      title: "Financial Reports",
      description: "Generate professional financial reports and statements with just a few clicks.",
      icon: "📋",
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Everything you need to manage your accounting business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for Serbian bookkeepers and accounting firms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="font-serif font-semibold text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
