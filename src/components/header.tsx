"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="text-3xl font-bold text-white leading-none">δ</span>
            </div>
            <span className="text-xl font-bold text-foreground">XRPerp</span>
          </div>

          <Link href="/trading">
            <button className="rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-95">
              Começar a Tradar
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
