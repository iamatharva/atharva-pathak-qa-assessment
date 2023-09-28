#!/bin/bash
npx hardhat compile

CONTRACT_ADDRESS=$(npx hardhat run scripts/deploy.js --network mumbai)

npx hardhat run scripts/set_value.js --network mumbai $CONTRACT_ADDRESS

VALUE_SET=$(npx hardhat run scripts/get_value.js --network mumbai $CONTRACT_ADDRESS)

CONTRACT_ADDRESS=$(jq -r '.contractAddress' deployment.json)
DEPLOYER_ADDRESS=$(jq -r '.deployerAddress' deployment.json)

echo '{
  "contractAddress": "'$CONTRACT_ADDRESS'",
  "deployerAddress": "'$DEPLOYER_ADDRESS'",
  "valueSet": "'$VALUE_SET'"
}' > output.json

cat output.json
