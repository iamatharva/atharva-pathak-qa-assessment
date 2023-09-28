FROM node:18.16.0-slim

RUN apt-get update && apt-get install -y jq

WORKDIR /app

COPY package*.json ./
COPY hardhat.config.js ./
COPY scripts/ ./scripts
COPY deploy_and_run.sh/ ./
COPY contracts/ ./contracts

RUN npm install

RUN chmod +x deploy_and_run.sh

CMD ["./deploy_and_run.sh"]
