# HIS REST API
Rest Api which maintain the users registered in the database through CRUD operations. This API is built with Next JS, TypeScript, Mongodb and Mongoose.

## Description

The API contains two endpoint `patients` and `professionals` which are the two type of users. Each endpoint allow CRUD operations over the corresponding collections stored in a Mongodb database.

## Validations
Validations were made using `class-validator`[https://github.com/typestack/class-validator#validation-decorators] which allow use decorators to validate the fields and in case that the validation fail, a friendly http error response will be sent.

## Installation
Run the command bellow to install all the dependencies.

```bash
$ npm install
```

## Configurations
To run the app, first is necessary make some configurations.

### MongoDB Configuration

#### Step 1
Create the database in Mongodb Atlas, follow the instructions at [https://docs.atlas.mongodb.com/getting-started/].

#### Step 2
Create the configuration file `.env` in the root of the project which will contain the environment variables necessary for the configuration of the app.

.env file template:

```
USER=<user-database-name> 

PASSWORD=<database-password>

DBPATH=<database-path>
```

### Security Configuration
The app is secured through Json Web Token Authentication. So, to access to the endpoints, first it is necessary configure JWT and seed the database with an Admin user, which will allow you access into the app and register more users.

#### JWT Configuration
To enable JWT in the app is necessary to create a secret key to share between the JWT signing and verifying steps. This Secret Key should be added as an enviroment variable in the `.env` file under the name `SECRETKEY`.

`.env file`

```
USER=<user-database-name> 

PASSWORD=<database-password>

DBPATH=<database-path>

SECRETKEY=change-me
```
#### Seed Databse

In order to seed the database, follow the bellow intructions:

##### Step 1
Add the enviroment variable `ADMINPASSWORD` in the `.env` file with a secret password.

`.env` Example:

```
USER=<user-database-name> 

PASSWORD=<database-password>

DBPATH=<database-path>

SECRETKEY=change-me

ADMINPASSWORD=change-me
```

##### Step 2
Run the following command to seed the database with an Admin user.

```
$ npx nestjs-command create:admin-user
```

Now if you have done this steps successfully you should have in your Mongo database, a collection named `appusers` which contain the super user (Admin) that will allow you register more users if you like.

## Running the App
Now the app is ready to run. You can run the app with one of the following commands.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Authentication
Now everything is ready to access the app. 

#### Login

To log an user you should make a request to the endpoint `/auth/login` using a valid credential (like Admin). This endpoint will return a token, that will allow you access to the endpoint, passing it in the header of the request.

Example:

```
$ # POST to /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "Admin", "password": "change-me"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
$ # Note: above JWT truncated
```

```
$ # GET /patients using access_token returned from previous step as bearer code
$ curl http://localhost:3000/patients -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
$ # result -> [{"_id":5ft87asd54, "username":"Jane", ...}, ...]
```

#### Register a new user
To register a new user you will need to access to the endpoint `/register/user` using a not expired token.

```
$ # POST to /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "Admin", "password": "change-me"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
$ # Note: above JWT truncated
```

```
$ # POST /register/user using access_token returned from previous step as bearer code
$ curl http://localhost:3000/patients -d '{"username": "Jhon", "password": "change-me"}' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
$ # result -> [{"_id":5ft87asd54, "username":"John", ...}, ...]
```

## API Documetation
Now that the API is running you can access to the API documentation, available in the route `/api` of the app. The documentation was build using Swagger, [here](https://swagger.io/) for more information

Example:

`localhost:3000/api`

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment
A demo of this api rest has been deployed with Heroku at [https://his-rest-api.herokuapp.com/]


