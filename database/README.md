# Mongo Data

## Overview

Mongo database. Uses Mongo 6.0.3 (as of 7/2023). 

### Folders and Sub Folders

The /dump folder contains a database dump of existing data. When setting up the database for the first time, the user needs to load the contents of the /dump folder into the mongo database. 

To do so, download mongorestore and other mongo tools by following instructions [here](https://www.mongodb.com/docs/database-tools/)

To load the infomation when mongorestore is installed 

`mongorestore --username <username> --password <password> --authenticationDatabase admin --verbose /dump`

### Docker

When running mongo in a docker container for the first time (ie building the image), you must run to load the information 
Once that command is run once, there is no need to run the command again since the data will live in the /data folder.

`docker exec -i <container-id> sh -c 'mongorestore --username <username> --password <password> --authenticationDatabase admin --verbose /dump`

This command also lives in `dump/import.sh` (though it needs modifying)

You should also create a /data folder in this folder though that is not necessary since docker will create the folder if it does not exist. 

