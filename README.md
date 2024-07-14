## Installation

```bash
$ npm install
```

```bash
$ cp .env.example .env
```

```bash
$ docker-compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

docker-compose up --build -d
https://blog.logrocket.com/containerized-development-nestjs-docker/

## para desarrollo

```bash
docker-compose -f docker-compose.yml up -d
```

## para produccion

```bash
docker-compose -f docker-compose.prod.yml up -d
```

//para detectar cambios en el codigo fuente, como cuando se baja cambios remotos
docker-compose -f docker-compose.prod.yml up -d --build

El parámetro -d en Docker Compose se utiliza para ejecutar los contenedores en segundo plano, es decir, en modo "detached". Esto significa que los contenedores se ejecutan en el fondo y liberan la terminal para que puedas seguir utilizando la línea de comandos sin que queden bloqueados por la salida de los logs de los contenedores.

--build: Construye las imágenes del servicio antes de iniciar los contenedores. Esto es útil cuando has realizado cambios en el Dockerfile o en los archivos relacionados con la construcción de la imagen, y necesitas asegurarte de que Docker Compose use la versión más actualizada de la imagen.

# Migraciones

```bash
npm run migrations:generate database/migrations/init
```

```bash
npm run migrations:run
```
