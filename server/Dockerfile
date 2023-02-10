FROM node:16.17.0-bullseye-slim

WORKDIR /server/

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "dev"]