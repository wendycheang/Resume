# React FrontEnd

## Overview

### The project

Built with Vite. 

Use `npm install` to install packages

Use `npm run dev` to run on development mode. The default port is 9000 and the frontend can be found at `localhost:9000`.

Use `vite build` to build for deployment

### Enviroment Variables

The only environment variable needed is VITE_BASE_API_URL which specifies the base url of the backend. You can set the variable in a .env file in this folder or you can set it via command line variables. 

If you are running this locally and have the backend also running on the same computer, the `VITE_BASE_API_URL=http://localhost:8080`. 

### Docker

The frontend is dockerized and is served via NGINX in a docker container. To learn more and to start and stop the entire 
resume stack go to the docker folder. 