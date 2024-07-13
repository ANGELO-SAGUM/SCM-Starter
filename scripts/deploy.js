const hre = require("hardhat");

async function main() {
  const initBalance = ethers.utils.parseEther("1.0");
  const Assessment = await hre.ethers.getContractFactory("Assessment");
  const assessment = await Assessment.deploy({ value: initBalance });
  await assessment.deployed();
  console.log(`A contract with balance of ${ethers.utils.formatEther(initBalance)} ETH deployed to ${assessment.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
