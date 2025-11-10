"use client"

interface Position {
  id: string
  side: "long" | "short"
  pair: string
  size: number
  sizeUSD: number
  leverage: number
  entryPrice: number
  currentPrice: number
  pnl: number
  pnlPercent: number
}

const mockPositions: Position[] = [
  {
    id: "1",
    side: "long",
    pair: "XRP/USD",
    size: 100,
    sizeUSD: 58.75,
    leverage: 10,
    entryPrice: 0.5825,
    currentPrice: 0.5875,
    pnl: 5.0,
    pnlPercent: 8.54,
  },
]

export default function PositionsPanel() {
  return (
    <div className="space-y-4">
      {/* Positions */}
      <div className="bg-card border border-border rounded-lg p-4 overflow-hidden">
        <h3 className="text-lg font-semibold text-foreground mb-4">Posições Abertas</h3>

        {mockPositions.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhuma posição aberta</p>
        ) : (
          <div className="space-y-3">
            {mockPositions.map((position) => (
              <div
                key={position.id}
                className={`p-3 rounded-lg border-l-4 ${
                  position.side === "long" ? "border-l-success bg-success/5" : "border-l-danger bg-danger/5"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-foreground">
                      {position.side === "long" ? "📈" : "📉"} {position.side.toUpperCase()} {position.pair}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Alavancagem: {position.leverage}x</div>
                  </div>
                  <button className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded hover:bg-primary/90 transition-colors">
                    Fechar
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-muted-foreground">Tamanho:</span>
                    <div className="text-foreground font-medium">${position.sizeUSD.toFixed(2)}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Entrada:</span>
                    <div className="text-foreground font-medium">${position.entryPrice.toFixed(4)}</div>
                  </div>
                </div>

                <div className={`text-sm font-bold ${position.pnl >= 0 ? "text-success" : "text-danger"}`}>
                  PnL: +${position.pnl.toFixed(2)} ({position.pnlPercent.toFixed(2)}%)
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Open Orders */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="text-lg font-semibold text-foreground mb-4">Ordens Abertas</h3>

        <p className="text-sm text-muted-foreground">Nenhuma ordem aberta</p>
      </div>
    </div>
  )
}
