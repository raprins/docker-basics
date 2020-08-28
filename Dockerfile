#Arbitrary Node version
FROM node:14.8.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --quiet

COPY . .
