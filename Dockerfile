FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install --production=true

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]