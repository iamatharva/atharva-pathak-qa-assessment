const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  await ethers.getSigners();
  const deploymentInfo = JSON.parse(fs.readFileSync('deployment.json'));
  const contractAddress = deploymentInfo.contractAddress;
  const GetterSetter = await ethers.getContractFactory('GetterSetter');
  const getterSetter = GetterSetter.attach(contractAddress);
  await getterSetter.getUint256();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
