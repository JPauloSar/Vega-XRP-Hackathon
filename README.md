XRPerp/
│
├── contracts/                 # All smart contracts
│   ├── PerpMarket.sol         # Core perpetual engine (single market)
│   ├── VaultManager.sol       # Delta-neutral vault/token logic
│   ├── DeltaToken.sol         # ERC20 for the delta-neutral token
│   ├── OracleAdapter.sol      # TWAP or Chainlink/Pyth price adapter
│   └── mocks/                 # Mock oracle, liquidity pool for tests
│
├── scripts/
│   ├── deploy.ts              # Deployment script (Hardhat)
│   ├── seed.ts                # Seeds initial liquidity or test positions
│   └── demoFlow.ts            # Script for your hackathon demo flow
│
├── test/
│   ├── PerpMarket.test.ts
│   ├── VaultManager.test.ts
│   └── DeltaNeutral.test.ts
│
├── frontend/                  # Next.js + RainbowKit interface
│   ├── components/
│   │   ├── PerpTradePanel.tsx
│   │   ├── DeltaTokenPanel.tsx
│   │   ├── PositionsTable.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── trade.tsx
│   │   └── vault.tsx
│   └── lib/
│       ├── wagmiClient.ts
│       ├── config.ts
│       └── utils.ts
│
├── backend/
│   ├── keeper/
│   │   ├── rebalanceBot.ts     # Rebalances vault exposure
│   │   └── liquidationBot.ts   # Checks liquidations
│   └── oracle/
│       └── priceFeeder.ts      # Pulls price feeds to OracleAdapter
│
├── README.md
├── hardhat.config.ts
├── package.json
└── .env