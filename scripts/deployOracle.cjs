const hre = require("hardhat");
const { Wallet } = require("ethers");
require("dotenv").config();

async function main() {
  console.log("🚀 Fazendo deploy do contrato Oracle...");

  // --- Cria um wallet com a private key do faucet ---
  if (!process.env.DEVNET_PRIVATE_KEY) {
    throw new Error("Coloque sua DEVNET_PRIVATE_KEY no .env");
  }
  const deployer = new Wallet(process.env.DEVNET_PRIVATE_KEY, hre.ethers.provider);

  console.log("Usando conta:", deployer.address);

  // --- Pega a factory do contrato com o signer ---
  const OracleFactory = await hre.ethers.getContractFactory("Oracle", deployer);

  // --- Faz o deploy ---
  const oracle = await OracleFactory.deploy();

  await oracle.waitForDeployment();

  // --- Endereço do contrato deployado ---
  console.log(`✅ Oracle deployado em: ${oracle.target}`);
}

main().catch((error) => {
  console.error("❌ Erro no deploy:", error);
  process.exitCode = 1;
});
