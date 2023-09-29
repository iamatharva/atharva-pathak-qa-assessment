const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  const deploymentInfo = JSON.parse(fs.readFileSync('deployment.json'));
  const contractAddress = deploymentInfo.contractAddress;
  const GetterSetter = await ethers.getContractFactory('GetterSetter');
  const getterSetter = GetterSetter.attach(contractAddress);
  const newValue = 123;
  const tx = await getterSetter.setUint256(newValue);
  await tx.wait();
  console.log('New value set in the contract:', newValue);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
