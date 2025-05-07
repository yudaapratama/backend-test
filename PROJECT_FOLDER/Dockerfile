ARG NODE_VERSION=20.15.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm install

EXPOSE 8020

CMD npm start