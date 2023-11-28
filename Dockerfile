FROM node:18-slim

WORKDIR /app

RUN npm install -g typescript

COPY ./package.json ./tsconfig.json ./yarn.lock ./nuxt.config.ts .

RUN yarn install

COPY ./assets/ ./assets

COPY ./components/ ./components

COPY ./layouts/ ./layouts

COPY ./pages/ ./pages

COPY ./public/ ./public

RUN yarn build

CMD node .output/server/index.mjs
