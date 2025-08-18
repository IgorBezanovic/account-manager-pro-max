import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-serif font-black text-4xl lg:text-6xl text-foreground leading-tight">
              The ultimate app for accountants and companies in Serbia
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Simplify your work with clients, automate reporting to eUprava, and manage everything from one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                View Pricing
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <img
                src="@/assets/modern-accountant-automation.png"
                alt="Accountant working with automated tools"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
