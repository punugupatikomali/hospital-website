# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the app using serve, proxying API requests to the Docker host's 8080
CMD ["serve", "-s", "build", "-l", "3000"]

# Note: To proxy API requests to the Docker host (port 8080),
# configure your frontend to use 'http://host.docker.internal:8080' as the API base URL.
