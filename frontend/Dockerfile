FROM node:12.20.0-alpine3.10

WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
COPY webpack.config.js /usr/src/app
RUN npm install

# FROM alpine_nginx