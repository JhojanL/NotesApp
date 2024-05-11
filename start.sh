#!/bin/bash

# Navigate to the backend directory, install dependencies, and start the server
cd backend && npm install && npm run start:dev &

# Navigate to the frontend directory, install dependencies, and start the server
cd ../frontend && npm install && npm run dev &