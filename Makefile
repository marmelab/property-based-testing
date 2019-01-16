MAKEFLAGS += --silent

DOCKER_COMPOSE_DEV = docker-compose -p property-based-testing -f docker-compose.yaml 

UID = $(shell id -u)
GID = $(shell id -g)

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install:
	$(DOCKER_COMPOSE_DEV) run --no-deps --rm client ash -ci 'yarn install'

run: start
start: ## Start the server
	$(DOCKER_COMPOSE_DEV) up -d

stop: ## Stop the server
	$(DOCKER_COMPOSE_DEV) down

logs:
	$(DOCKER_COMPOSE_DEV) logs -f

connect-client:
	$(DOCKER_COMPOSE_DEV) run --no-deps --rm client ash

test:
	$(DOCKER_COMPOSE_DEV) run --no-deps --rm client ash -ci 'yarn test'

test-watch:
	$(DOCKER_COMPOSE_DEV) run --no-deps --rm client ash -ci 'yarn run test:watch'

lint:
	yarn run lint

.DEFAULT_GOAL := help
