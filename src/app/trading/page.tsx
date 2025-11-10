"use client"

import { useState } from "react"
import TradingHeader from "@/components/trading-header"
import PriceChart from "@/components/price-chart"
import OrderBook from "@/components/order-book"
import TradingPanel from "@/components/trading-panel"
import PositionsPanel from "@/components/positions-panel"
import MarketInfo from "@/components/market-info"

export default function TradingPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [selectedPair] = useState("XRP/USD")
  const [currentPrice] = useState(0.5875)

  const handleConnectWallet = () => {
    // Simulated MetaMask connection
    setIsConnected(true)
    setWalletAddress("0xAb...1234")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <TradingHeader isConnected={isConnected} walletAddress={walletAddress} onConnect={handleConnectWallet} />

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 p-4 lg:p-6">
        {/* Chart Section - 70% width on desktop */}
        <div className="lg:col-span-3 space-y-4">
          <PriceChart pair={selectedPair} currentPrice={currentPrice} />
          <TradingPanel pair={selectedPair} currentPrice={currentPrice} />
        </div>

        {/* Right Sidebar - 30% width on desktop */}
        <div className="lg:col-span-1 space-y-4">
          <OrderBook />
          <PositionsPanel />
        </div>
      </div>

      <MarketInfo />
    </main>
  )
}
