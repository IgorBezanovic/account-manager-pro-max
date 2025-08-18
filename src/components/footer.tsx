export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AM</span>
              </div>
              <span className="font-serif font-bold text-lg text-card-foreground">Account Manager Pro Max</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ultimate accounting solution for Serbian professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>💼
              </a>
              <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                <span className="sr-only">Twitter</span>🐦
              </a>
              <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                <span className="sr-only">Facebook</span>📘
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024 Account Manager Pro Max. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
