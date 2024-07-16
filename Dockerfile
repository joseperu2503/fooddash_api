FROM node:18-alpine3.15 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci && npm cache clean --force

# COPY . .
# RUN npm run build


CMD npm run start:dev

FROM node:18-alpine3.15 AS production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

# # Ejecutar migraciones
# RUN npm run migrations:run

CMD npm run migrations:run && npm run start
