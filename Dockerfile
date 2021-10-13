# Specify a base image
FROM node:12.16.2-alpine

WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm install --production=true
COPY . .

EXPOSE 80

# Default command
CMD ["npm", "run", "start"]