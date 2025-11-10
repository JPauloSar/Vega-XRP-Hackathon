"use client"

import { useState } from "react"

interface TradingPanelProps {
  pair: string
  currentPrice: number
}

export default function TradingPanel({ pair, currentPrice }: TradingPanelProps) {
  const [side, setSide] = useState<"long" | "short">("long")
  const [quantity, setQuantity] = useState("1.0")
  const [priceType, setPriceType] = useState<"market" | "limit">("market")
  const [limitPrice, setLimitPrice] = useState(currentPrice.toString())
  const [leverage, setLeverage] = useState(1)
  const [takeProfitEnabled, setTakeProfitEnabled] = useState(false)
  const [stopLossEnabled, setStopLossEnabled] = useState(false)

  const quantityNum = Number.parseFloat(quantity) || 0
  const priceNum = Number.parseFloat(priceType === "market" ? currentPrice.toString() : limitPrice) || 0
  const notionalValue = quantityNum * priceNum
  const marginRequired = notionalValue / leverage
  const liquidationPrice = side === "long" ? currentPrice * (1 - 1 / leverage) : currentPrice * (1 + 1 / leverage)

  return (
    <div className="bg-card border border-border rounded-lg p-4 lg:p-6">
      {/* Side Toggle */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setSide("long")}
          className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
            side === "long" ? "bg-success text-white" : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          📈 LONG
        </button>
        <button
          onClick={() => setSide("short")}
          className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
            side === "short" ? "bg-danger text-white" : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          📉 SHORT
        </button>
      </div>

      {/* Quantity Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">Quantidade</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="0.0"
          className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="mt-2 text-xs text-muted-foreground">≈ ${notionalValue.toFixed(2)} USD</div>
      </div>

      {/* Price Type Toggle */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">Tipo de Ordem</label>
        <div className="flex gap-2">
          <button
            onClick={() => setPriceType("market")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              priceType === "market"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Market
          </button>
          <button
            onClick={() => setPriceType("limit")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              priceType === "limit"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Limit
          </button>
        </div>
      </div>

      {/* Limit Price Input */}
      {priceType === "limit" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2">Preço</label>
          <input
            type="number"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            placeholder="0.0000"
            className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      )}

      {/* Leverage Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-foreground">Alavancagem</label>
          <span className="text-lg font-bold text-primary">{leverage}x</span>
        </div>
        <input
          type="range"
          min="1"
          max="50"
          value={leverage}
          onChange={(e) => setLeverage(Number.parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Risk Management Checkboxes */}
      <div className="space-y-3 mb-6 pb-6 border-b border-border">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={takeProfitEnabled}
            onChange={(e) => setTakeProfitEnabled(e.target.checked)}
            className="w-4 h-4 rounded border-border"
          />
          <span className="text-sm text-foreground">✓ Take Profit</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={stopLossEnabled}
            onChange={(e) => setStopLossEnabled(e.target.checked)}
            className="w-4 h-4 rounded border-border"
          />
          <span className="text-sm text-foreground">✓ Stop Loss</span>
        </label>
      </div>

      {/* Trade Info */}
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Margem Necessária:</span>
          <span className="text-foreground font-medium">${marginRequired.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Preço de Liquidação:</span>
          <span className="text-foreground font-medium">${liquidationPrice.toFixed(4)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Taxas:</span>
          <span className="text-foreground font-medium">0.02%</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        className={`w-full py-3 rounded-lg font-bold text-white text-lg transition-all ${
          side === "long" ? "bg-success hover:bg-success/90" : "bg-danger hover:bg-danger/90"
        }`}
      >
        {side === "long" ? "LONG XRP" : "SHORT XRP"}
      </button>
    </div>
  )
}
