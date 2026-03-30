# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Expose port 3000 for the Vite dev server
EXPOSE 3000

# Run the development server
# --host 0.0.0.0 is required for Docker
# The port is already set to 3000 in vite.config.ts
CMD ["npm", "run", "dev", "--", "--host"]
