import { defineChain } from "viem";

export const xrplEvmTestnet = defineChain({
  id: 1449000,
  name: "XRPL EVM Sidechain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "XRP",
    symbol: "XRP",
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.xrplevm.org"] },
    public: { http: ["https://rpc.testnet.xrplevm.org"] },
  },
  blockExplorers: {
    default: { name: "XRPL EVM Sidechain Testnet", url: "https://rpc.testnet.xrplevm.org" },
  },
  testnet: true,
});