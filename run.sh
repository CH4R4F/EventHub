#!/bin/bash

# Start postgres and pgadmin in detached mode
docker-compose up --build -d postgres pgadmin

# Start server in the foreground
docker-compose up server
