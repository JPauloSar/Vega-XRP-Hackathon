"use client"

import Link from "next/link"

interface TradingHeaderProps {
  isConnected: boolean
  walletAddress: string | null
  onConnect: () => void
}

export default function TradingHeader({ isConnected, walletAddress, onConnect }: TradingHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
        {/* Logo - wrapped in Link to navigate to home page */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-white">δ</span>
          </div>
          <span className="text-xl lg:text-2xl font-bold text-foreground hidden sm:inline">XRPerp</span>
        </Link>

        {/* Center - Network & Market Info */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-success rounded-full"></span>
            <span className="text-sm text-muted-foreground">XRP Ledger</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Balance Display */}
          {isConnected && (
            <div className="hidden sm:block text-right">
              <div className="text-xs text-muted-foreground">Saldo</div>
              <div className="text-sm lg:text-base font-semibold text-foreground">$1,250.75</div>
            </div>
          )}

          {/* Connect Wallet Button */}
          <button
            onClick={onConnect}
            className="px-3 lg:px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm lg:text-base rounded-lg transition-colors"
          >
            {isConnected ? walletAddress : "Conectar MetaMask"}
          </button>
        </div>
      </div>
    </header>
  )
}
