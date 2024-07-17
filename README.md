# FoodDash API

## Installation

### Variables de entorno

```bash
cp .env.example .env
```

```bash
nano .env
```

## Para desarrollo

```bash
docker-compose -f docker-compose.yml up -d
```

```bash
docker-compose -f docker-compose.yml up -d --build
```

## Para produccion

```bash
docker-compose -f docker-compose.prod.yml up -d
```

para detectar cambios en el codigo fuente, como cuando se baja cambios remotos:

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

El parámetro -d en Docker Compose se utiliza para ejecutar los contenedores en segundo plano, es decir, en modo "detached". Esto significa que los contenedores se ejecutan en el fondo y liberan la terminal para que puedas seguir utilizando la línea de comandos sin que queden bloqueados por la salida de los logs de los contenedores.

--build: Construye las imágenes del servicio antes de iniciar los contenedores. Esto es útil cuando has realizado cambios en el Dockerfile o en los archivos relacionados con la construcción de la imagen, y necesitas asegurarte de que Docker Compose use la versión más actualizada de la imagen.

# Migraciones

1. Identificar el ID o el nombre del contenedor:

```bash
docker ps
```

2. Entrar al contenedor:

```bash
docker exec -it CONTAINER_ID /bin/sh
```

3. Ejecutar el comando dentro del contenedor:

```bash
npm run migrations:run
```

4. (Opcional) Ejecutar Seeders

```bash
npm run cli -- seed
```

5. Salir:

```bash
exit
```

## Limpiar imagenes dangling

```bash
docker image prune -f
```

## Crear migraciones

```bash
npm run migrations:generate database/migrations/init
```
