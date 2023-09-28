const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying GetterSetter contract with the account:', deployer.address);
  const GetterSetter = await ethers.getContractFactory('GetterSetter');
  const getterSetter = await GetterSetter.deploy();
  await getterSetter.deployTransaction.wait();
  console.log('GetterSetter contract deployed to address:', getterSetter.address);
  const deploymentInfo = {
    contractAddress: getterSetter.address,
    deployerAddress: deployer.address,
  };
  fs.writeFileSync('deployment.json', JSON.stringify(deploymentInfo, null, 2));
  console.log(`Contract address: ${getterSetter.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
