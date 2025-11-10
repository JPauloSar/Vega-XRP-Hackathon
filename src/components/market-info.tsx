"use client"

export default function MarketInfo() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="px-4 lg:px-6 py-4 flex flex-wrap gap-6 justify-center lg:justify-around text-sm">
        <div className="text-center">
          <div className="text-muted-foreground text-xs mb-1">Taxa de Funding</div>
          <div className="text-foreground font-semibold">0.0021%</div>
          <div className="text-xs text-muted-foreground mt-1">Próximo em 2h</div>
        </div>

        <div className="text-center">
          <div className="text-muted-foreground text-xs mb-1">Open Interest</div>
          <div className="text-foreground font-semibold">$125.4M</div>
        </div>

        <div className="text-center">
          <div className="text-muted-foreground text-xs mb-1">Volume 24h</div>
          <div className="text-foreground font-semibold">$845.2M</div>
        </div>

        <div className="text-center">
          <div className="text-muted-foreground text-xs mb-1">Funding Rate</div>
          <div className="text-foreground font-semibold">0.0005%</div>
        </div>
      </div>
    </footer>
  )
}
