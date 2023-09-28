COMPOSE := $(shell which docker-compose || echo 'docker compose')

deploy_contract:
	$(COMPOSE) down -v && \
	$(COMPOSE) up --build hardhat-app