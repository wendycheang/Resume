# Docker stack

## Overview

### Docker

Currently the docker-compose file uses Docker v3 (as of 7/2023). 

All levels of the stack are dockerized. 

The frontend and backend use multistage builds to build the code and serve the apps. The frontend uses node to build and nginx to serve the assets and the backend uses gradle to build and eclipse-temurin. The respective dockerfiles live in `../frontend/frontend.Dockerfile` and `../backend/backend.Dockerfile`. 

The mongo database is also dockerized. There a /dump folder in `../database/data` that seeds the initial mongo database. See the [mongo](#mongo) section for more information. The user should also create a `/data` folder in the database folder. That folder is mounted and stores the database data. 

To start the docker container 
`docker compose up -d`

To stop the docker container
`docker compose down -d`

### Enviroment Variables

You need 2 environment variables to get the containers working. You can set the variable in a .env file in this folder or you can set it via command line variables.

```
VITE_BASE_API_URL=http://localhost:8080
DATABASE_URL=mongodb://<username>:<password>@mongo:27017/?authSource=admin
```

### Mongo 

When running mongo in a docker container for the first time (ie building the image), you must run to load the information 
Once that command is run once, there is no need to run the command again since the data will live in the `../database/data` folder.

`docker exec -i <container-id> sh -c 'mongorestore --username <username> --password <password> --authenticationDatabase admin --verbose /dump`

This command also lives in `../database/dump/import.sh` (though it needs modifying)

You should also create a /data folder in the database folder though that is not necessary since docker will create the folder if it does not exist. 

### URLS and Ports

The frontend uses port 9000, the backend uses port 8080 and the mongo database uses port 27018

To access the frontend use `localhost:9000`, the backend use `localhost:8080`

To access the mongo database connection to `localhost:27018` using the username/password authentication method and set the 
username and password you picked


### Networking

The backend and mongo database share a network name `shared-network` and talk to each other. The frontend does not since there is no reason to. 