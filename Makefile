up:
	@make create-dev-env
	@make start-containers

down:
	@make stop-containers

test:
	@docker-compose run --rm --no-deps node npm run test

install:
	@make create-dev-env
	@docker-compose run --rm --no-deps node npm install

start-containers:
	@docker-compose up --build -d

create-dev-env:
	@test -e .env || cp .env.example .env
	@test -e .api.env || cp .api.env.example .api.env

stop-containers:
	@docker-compose down -v

lint:
	@docker-compose run --rm --no-deps node npm run lint

.PHONY: all test clean