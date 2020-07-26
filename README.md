# HIS REST API
Rest Api which maintain the users registered in the database through CRUD operations. This API is built with Next JS, TypeScript, Mongodb and Mongoose.

## Description

The API contains two endpoint `patients` and `professionals` which are the two type of users. Each endpoint allow CRUD operations over the corresponding collections stored in a Mongodb database.

## Validations
Validations were made using `class-validator`[https://github.com/typestack/class-validator#validation-decorators] which allow use decorators to validate each field needed and in case that the validation fail, a friendly http error response, will be sent.

## Installation
Run the command bellow to install all the dependencies.

```bash
$ npm install
```

## Running the app
To run the app, first is needed configure the connection with the Mongodb database.

#### Step 1
Create the database in Mongodb Atlas, follow the instructions at [https://docs.atlas.mongodb.com/getting-started/] for more information.

#### Step 2
Create the configuration file `.env` in the root of the project which will contain the environment variables needed in the configuration of the database, in the file [app.module.ts](https://github.com/williamvn/his-rest-api/blob/master/src/app.module.ts)

.env file example:


```
USER=<user-name> 

PASSWORD=<password>

DBPATH=<database-path>
```

Then the app is ready to run. You can run the app with one of the following commands.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
