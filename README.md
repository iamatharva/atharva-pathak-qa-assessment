# Atharva Pathak QA Assessment for Chainlink
## Hardhat Smart Contract Deployment and Interaction

This project demonstrates how to deploy and interact with a Solidity smart contract using Hardhat, a development environment for Ethereum smart contracts.

### Prerequisites
Before you begin, ensure you have the following:

Node.js installed (v18.16.0) Required only if running locally

Docker installed (v24.0.6)

#### Install project dependencies:
```
npm install
```
#### Export the following variables or keep it in the local `~/.zshrc` or bash file
```
export ALCHEMY_API_KEY=<Your Alchemy API Key>
export PRIVATE_KEY=<Your Ethereum Wallet Private Key>
```
### Running and Deploying contract (Docker Containerization)
```
make deploy_contract
```
### Running and Deploying contract (Without Containerization)
```
bash deploy_and_run.sh
```
This will execute the deployment and interaction scripts inside the container.
