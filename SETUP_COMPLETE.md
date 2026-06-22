# Resume Application - Setup Complete ✅

## What Was Installed and Configured

### 1. **Frontend Setup** ✅
- Installed Node.js dependencies (React, Vite, and related packages)
- Location: `frontend/`
- Dependencies: 268 packages installed

### 2. **Backend Setup** ✅
- Fixed Docker build configuration to use Java 17 (required by Spring Boot 3.1.1)
- Updated backend.Dockerfile to use `gradle:8.1-jdk17` and `eclipse-temurin:17-jre-alpine`
- Tests configured to skip during Docker build (MongoDB not available during build)
- Location: `backend/resume/`

### 3. **Database Setup** ✅
- Created `/database/data` folder for MongoDB persistence
- MongoDB is running in Docker container on port 27018
- Loaded initial database dump with 8 documents:
  - 1 Person record
  - 3 Employment records
  - 3 Skills records
  - 1 Projects record

### 4. **Docker Configuration** ✅
- Created `.env` file in `docker/` folder with environment variables:
  ```
  VITE_BASE_API_URL=http://localhost:8080
  DATABASE_URL=mongodb://resumeuser:resumepass@mongo:27017/?authSource=admin
  DATABASE_USERNAME=resumeuser
  DATABASE_PASSWORD=resumepass
  ```

## Running Services

All three services are now running and ready to use:

### Frontend
- **URL**: http://localhost:9000
- **Container**: ngixreactapp
- **Status**: ✅ Running on port 9000

### Backend API
- **URL**: http://localhost:8080
- **Container**: docker-resume-backend-1
- **Status**: ✅ Running on port 8080

### MongoDB Database
- **URL**: mongodb://resumeuser:resumepass@localhost:27018/?authSource=admin
- **Container**: mongo
- **Status**: ✅ Running on port 27018
- **Username**: resumeuser
- **Password**: resumepass

## Useful Docker Commands

### Start/Stop Services
```bash
# Start services
cd docker
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs -f [service-name]

# Rebuild after code changes
docker compose up --build
```

### Database Management
```bash
# Connect to MongoDB
docker exec -it mongo mongosh --username resumeuser --password resumepass --authenticationDatabase admin

# Backup database
docker exec mongo mongodump --username resumeuser --password resumepass --authenticationDatabase admin --out /backup

# Restore database
docker exec -i mongo mongorestore --username resumeuser --password resumepass --authenticationDatabase admin /db-dump
```

### Service Monitoring
```bash
# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# View container logs
docker logs [container-id or container-name]

# Get detailed container info
docker inspect [container-id or container-name]
```

## Frontend Development Mode (Local)

If you want to run the frontend in development mode locally:

```bash
cd frontend
npm install  # Already done
npm run dev  # Start dev server on localhost:9000
```

Note: You'll need to set `VITE_BASE_API_URL=http://localhost:8080` environment variable for the dev server to connect to the backend.

## Backend Development Mode (Local)

If you want to run the backend in development mode locally:

1. Install Java 17+ (currently system has Java 8)
2. Navigate to `backend/resume/`
3. Run: `./gradlew bootRun`

## Known Issues / Notes

1. **System Java Version**: System has Java 8, but the project requires Java 17. This is handled by using Docker containers with the correct Java version.

2. **Database Initialization**: MongoDB user credentials are set up in the docker-compose environment variables and loaded when the container starts.

3. **Test Execution**: Backend tests are skipped during Docker build as they require a running MongoDB instance. To run tests locally:
   ```bash
   cd backend/resume
   ./gradlew test
   ```
   (This requires MongoDB to be running)

## Next Steps

1. Access the application at http://localhost:9000
2. The backend API is available at http://localhost:8080
3. Check the database at localhost:27018 using MongoDB tools or clients

## Troubleshooting

If containers fail to start:
1. Check Docker Desktop is running: `docker ps`
2. View container logs: `docker logs [container-name]`
3. Restart services: `docker compose down && docker compose up -d`

If MongoDB authentication fails:
1. Ensure the credentials in `.env` match what's in the compose.yml
2. Wait 10+ seconds after starting containers for MongoDB to fully initialize
3. Check logs: `docker logs mongo`
