FROM node:18-alpine3.15 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

# COPY . .

# RUN npm run build

FROM node:18-alpine3.15 as production

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