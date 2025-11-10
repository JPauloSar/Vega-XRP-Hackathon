"use client"

import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Subtitle */}
        <p className="mb-6 text-sm font-medium text-primary sm:text-base">✓ DEX de Perpetual Futures na XRP Ledger</p>

        {/* Main Title */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Sua casa para Trading seguro de ativos reais, na segurança da Blockchain
        </h1>

        {/* Subtitle Description */}
        <p className="mb-10 text-base sm:text-lg text-foreground">
          Trade Perpetual Futures de XRP com alavancagem até 50x
        </p>

        {/* CTA Button */}
        <Link
          href="/trading"
          className="mb-16 inline-block rounded-full bg-primary px-8 py-4 text-base sm:text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
        >
          Começar a Tradar
        </Link>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
