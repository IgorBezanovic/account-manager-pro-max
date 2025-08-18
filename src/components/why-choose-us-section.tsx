export function WhyChooseUsSection() {
  const benefits = [
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
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Why choose Account Manager Pro Max?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Serbian accounting professionals who trust our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="font-serif font-semibold text-xl text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
