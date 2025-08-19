import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif font-black text-3xl lg:text-5xl text-primary-foreground">
            Start simplifying your accounting today!
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Join thousands of Serbian accounting professionals who have already transformed their practice with Account
            Manager Pro Max.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-12 py-4">
              Try it Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-12 py-4 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
