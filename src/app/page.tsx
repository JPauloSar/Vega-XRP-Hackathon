"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import FlareBackground from "@/components/flare-background"

export default function HomePage() {
  return (
    <div className="relative">
      <FlareBackground />
      <main className="min-h-screen flex flex-col bg-background text-foreground relative z-10">
        <Header />
        <HeroSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  )
}
