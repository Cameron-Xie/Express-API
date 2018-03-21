# Express API

An API built with ExpressJS.

**Stacks**

* Framework: Express
* Test: Jest, SuperTest
* Lint: ESlint
* Compiler: Babel
* Development Tool: nodemon
* Containerisation: Docker CE

### How to set up development / test environment

**With Docker**

* Make sure you have Docker and Docker Compose installed.
* Clone the repository.
* Run `make install` from application `root` directory.
* Modify `/etc/hosts` accordingly. default is (127.0.0.1 api.example).
* Run `make up` form application `root` directory.

### How to run test

* Run `make test` from application `root` directory. it will run `lint` and `integration` test.
