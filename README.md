# rk_cypress demo

[![CircleCI](https://circleci.com/gh/rakazirut/rk_cypress.svg?style=shield&circle-token=ef935c1a1652cae540c3cf43c68318e2351c7cec)](https://circleci.com/gh/rakazirut/rk_cypress/tree/main)

Simple project for cypress demo. CircleCI workflows trigger on build and on schedule. ~~Test results are written to riis testmo account~~.

Running using docker-compose
1. Install [docker]('https://docs.docker.com/get-docker/') and [docker-compose]('https://docs.docker.com/compose/install/')
2. Ensure connection to vpn
3. Create cypress container (it will also run after creation)
    - `docker-compose up cypress`
4. (Optional) To run again without rebuilding the container
    - `docker-compose run cypress`
5. (Optional) Afterwards to tear down containers used
    - `docker-compose down`