const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  const deploymentInfo = JSON.parse(fs.readFileSync('deployment.json'));
  const contractAddress = deploymentInfo.contractAddress;
  const GetterSetter = await ethers.getContractFactory('GetterSetter');
  const getterSetter = GetterSetter.attach(contractAddress);
  const value = await getterSetter.getUint256();
  console.log('Value retrieved from the contract:', value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
