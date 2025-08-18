import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Account Manager Pro Max - Ultimate App for Serbian Accountants",
  description:
    "Simplify your work with clients, automate reporting to eUprava, and manage everything from one place. The trusted solution for bookkeepers and accounting firms in Serbia.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
