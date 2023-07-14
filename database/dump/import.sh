#! /bin/bash

# one time command to run after container is built
docker exec -i <container-id> sh -c 'mongorestore --username <username> --password <password> --authenticationDatabase admin --verbose /dump ' 

