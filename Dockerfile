# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install Node.js dependencies using Yarn
RUN yarn install

# Copy the remaining app files to the container
COPY . .

# Build the React app for production
RUN yarn build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the app
CMD [ "yarn", "start" ]
