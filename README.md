# RESTful API with Koa, Passport, Redis, and Postgres

[![Build Status](https://travis-ci.org/jeneser/smart-pos-api.svg?branch=master)](https://travis-ci.org/jeneser/smart-pos-api)

## Use this project

1. Fork/Clone
1. Install dependencies - `npm install`
1. Fire up Postgres and Redis on the default ports
1. Create two local Postgres databases - `koa_api` and `koa_api_test`
1. Migrate - `knex migrate:latest --env development`
1. Seed - `knex seed:run --env development`
1. Sanity check - `npm start`
1. Test - `npm test`
1. rollback - `knex migrate:rollback`

## Some tips

1. pgadmin4: pg admin

```
sudo docker run --rm --name pgadmin4-docker -p 80:80 \
  -e "PGADMIN_DEFAULT_EMAIL=user@domain.com" \
  -e "PGADMIN_DEFAULT_PASSWORD=SuperSecret" \
  -d dpage/pgadmin4
```

2. postgres: use local host, such as: 192.168.0.101

```
sudo docker run --rm --name pg-docker -e POSTGRES_USER=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres
```

3. create database
```
sudo docker exec -it pg-docker psql -U postgres -c "create database koa_api"

sudo docker exec -it pg-docker psql -U postgres -c "create database koa_api_test"
```

4. test it

```
sudo docker exec -it pg-docker psql -U postgres -c "\c koa_api" -c "select * from movies"
```

5. install redis

```
sudo docker run --rm --name redis-docker -d -p 6379:6379 -v $HOME/docker/volumes/redis:/data redis redis-server --appendonly yes
```
