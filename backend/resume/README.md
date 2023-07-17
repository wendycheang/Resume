# Java backend

## Overview

Built with gradle. Uses Java 20 (as of 7/2023)

Use `gradle bootRun` to run the code in development mode. 

Use `gradle build` to build the code for production. (Note that this is generally not necessary as the docker containers build the Java code already)

### Enviroment Variables

You need 1 environment variables to get the java You can set the variable in a .env file in this folder or you can set it via command line variables.
The username and password are user defined authentication to whatever database the backend connects to. The port is also defined by the user (or whoever is creating the database)

```
DATABASE_URL=mongodb://<username>:<password>@localhost:<port>/?authSource=admin
```

### URLS and Ports

The the backend uses port 8080 and the mongo database uses port 27018

To access the backend use `localhost:8080`

To access the mongo database connection to `localhost:<port>` using the username/password authentication method and set the 
username and password you picked

