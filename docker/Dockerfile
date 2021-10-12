FROM node:12.16.2-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json .

RUN npm install --production=true

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]