import path from "path";
import { createWalletClient, createPublicClient, http, parseEther, keccak256, encodePacked } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { xrplEvmTestnet } from "../../chains";
import oracleAbi from "../../artifacts/contracts/Oracle.sol/Oracle.json" with { type: "json" };
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// --- CONFIG ---
const ORACLE_ADDRESS = process.env.ORACLE_ADDRESS as `0x${string}`;
const PRIVATE_KEY = process.env.FEEDER_PRIVATE_KEY as `0x${string}`;
const PAIR_ID = keccak256(encodePacked(["string"], ["XRP/USD"]));
const UPDATE_INTERVAL_MS = 30_000; // every 30s
if (!PRIVATE_KEY) {
  throw new Error("❌ FEEDER_PRIVATE_KEY não encontrada no .env");
}
if (!ORACLE_ADDRESS) {
  throw new Error("❌ ORACLE_ADDRESS não encontrada no .env");
}

// --- SETUP CLIENTS ---
const account = privateKeyToAccount(PRIVATE_KEY);
const walletClient = createWalletClient({ chain: xrplEvmTestnet, account, transport: http() });

async function getPriceFromBinance(): Promise<number> {
  try {
    const res = await axios.get("https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT");
    return parseFloat(res.data.price);
  } catch (e) {
    console.error("Error fetching price:", e);
    return 0;
  }
}

async function updateOracle() {
  const price = await getPriceFromBinance();
  if (price === 0) return;

  // scale to 1e8 (like Chainlink)
  const scaledPrice = BigInt(Math.round(price * 1e8));

  console.log(`🛰️ Updating oracle: XRP/USD = ${price} (${scaledPrice})`);

  const txHash = await walletClient.writeContract({
    address: ORACLE_ADDRESS,
    abi: oracleAbi.abi,
    functionName: "setPrice",
    args: [PAIR_ID, scaledPrice],
  });

  console.log(`✅ Price updated tx: ${txHash}`);
}

async function main() {
  console.log("🚀 Starting Oracle Feeder...");
  console.log(`Target Oracle: ${ORACLE_ADDRESS}`);
  console.log(`Pair ID: ${PAIR_ID}`);
  await updateOracle();

  setInterval(updateOracle, UPDATE_INTERVAL_MS);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});