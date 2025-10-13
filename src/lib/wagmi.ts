"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { hardhat, sepolia } from "wagmi/chains";
import { xrplEvmDevnet } from "@/chains";

const hardhatChain = {
  id: 31337,
  name: "Hardhat",
  network: "hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
  blockExplorers: {
    default: { name: "Hardhat", url: "http://localhost:8545" },
  },
  testnet: true,
} as const;

// XRPL EVM Devnet
const xrplDevnetChain = {
  id: 1440002,
  name: "XRPL EVM Sidechain Devnet",
  network: "xrpl-devnet",
  nativeCurrency: {
    decimals: 18,
    name: "XRP",
    symbol: "XRP",
  },
  rpcUrls: {
    default: { http: ["https://rpc-dev-evm-sidechain.xrpl.org"] },
    public: { http: ["https://rpc-dev-evm-sidechain.xrpl.org"] },
  },
  blockExplorers: {
    default: { name: "XRPL Devnet Explorer", url: "https://dev-evm-sidechain.xrpl.org" },
  },
  testnet: true,
} as const;


export const config = getDefaultConfig({
  appName: "Meu App Web3",
  projectId: "43f3727a3c17ee8268618dae92945ea2",
  chains: [sepolia, hardhatChain, xrplDevnetChain],
  ssr: true,
});
export { hardhat };