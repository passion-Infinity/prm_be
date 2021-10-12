FROM node:12.16.2-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json .

RUN npm install --only=production \
    && npm cache clean --force

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]