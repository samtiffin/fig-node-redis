FROM node:0.12

EXPOSE 8008

ADD . /app
WORKDIR /app

RUN npm install