"use client"

import { useState } from "react"

interface PriceChartProps {
  pair: string
  currentPrice: number
}

const timeframes = ["1H", "4H", "1D", "1W", "1M"]

export default function PriceChart({ pair, currentPrice }: PriceChartProps) {
  const [activeTimeframe, setActiveTimeframe] = useState("1H")

  return (
    <div className="bg-card border border-border rounded-lg p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg lg:text-2xl font-semibold text-foreground">{pair} Perpetual</h2>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl lg:text-3xl font-bold text-primary">${currentPrice.toFixed(4)}</span>
            <span className="text-sm text-success">+2.45%</span>
          </div>
        </div>

        {/* Timeframe Buttons */}
        <div className="flex gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveTimeframe(tf)}
              className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                activeTimeframe === tf
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="w-full h-64 lg:h-80 bg-secondary rounded-lg flex items-center justify-center border border-border">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">Gráfico Candlestick</p>
          <p className="text-xs text-muted-foreground">Timeframe: {activeTimeframe}</p>
        </div>
      </div>

      {/* Indicators Info */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Volume 24h: </span>
          <span className="text-foreground font-medium">$845.2M</span>
        </div>
        <div>
          <span className="text-muted-foreground">Open Interest: </span>
          <span className="text-foreground font-medium">$125.4M</span>
        </div>
      </div>
    </div>
  )
}
