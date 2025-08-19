import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
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
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">What our clients say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by accounting professionals across Serbia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "@/assets/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
