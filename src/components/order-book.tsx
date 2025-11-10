"use client"

interface OrderLevel {
  price: number
  quantity: number
  total: number
}

const mockBids: OrderLevel[] = [
  { price: 0.5873, quantity: 1250, total: 735 },
  { price: 0.5871, quantity: 980, total: 575 },
  { price: 0.5869, quantity: 1500, total: 881 },
  { price: 0.5865, quantity: 2100, total: 1230 },
  { price: 0.5863, quantity: 890, total: 522 },
]

const mockAsks: OrderLevel[] = [
  { price: 0.5877, quantity: 1100, total: 647 },
  { price: 0.5879, quantity: 1350, total: 794 },
  { price: 0.5881, quantity: 2050, total: 1206 },
  { price: 0.5885, quantity: 780, total: 459 },
  { price: 0.5887, quantity: 1620, total: 953 },
]

export default function OrderBook() {
  const spread = (((mockAsks[0].price - mockBids[0].price) / mockBids[0].price) * 100).toFixed(4)

  return (
    <div className="bg-card border border-border rounded-lg p-4 overflow-hidden">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">Order Book</h3>
        <p className="text-xs text-muted-foreground">Spread: {spread}%</p>
      </div>

      {/* Order Book Columns */}
      <div className="space-y-3">
        {/* Bids */}
        <div>
          <div className="text-xs font-semibold text-success mb-2">BIDS (Compras)</div>
          <div className="space-y-1">
            {mockBids.slice(0, 3).map((bid, idx) => (
              <div
                key={idx}
                className="flex justify-between text-xs p-2 rounded bg-success/10 hover:bg-success/20 transition-colors"
              >
                <span className="text-foreground">${bid.price.toFixed(4)}</span>
                <span className="text-muted-foreground">{bid.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spread Indicator */}
        <div className="border-t border-b border-border py-2 text-center">
          <p className="text-xs text-muted-foreground">Spread</p>
        </div>

        {/* Asks */}
        <div>
          <div className="text-xs font-semibold text-danger mb-2">ASKS (Vendas)</div>
          <div className="space-y-1">
            {mockAsks.slice(0, 3).map((ask, idx) => (
              <div
                key={idx}
                className="flex justify-between text-xs p-2 rounded bg-danger/10 hover:bg-danger/20 transition-colors"
              >
                <span className="text-foreground">${ask.price.toFixed(4)}</span>
                <span className="text-muted-foreground">{ask.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
