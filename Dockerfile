# Specify a base image
FROM node:12.3.0-alpine

WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm install
COPY . .

EXPOSE 3000

# Default command
CMD ["npm", "run", "start"]