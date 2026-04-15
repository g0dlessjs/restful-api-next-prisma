# Development

Pasos para levantar la app en desarrollo

1 - levantar la base de datos

```bash
docker-compose up -d
```

2 - Crear una copia .env.temmplate, y renombrarlo a .env

3 - Reemplazar las variables de entorno

4 - Ejecutar el comando de `npm install`

5 - Ejecutar el comando `npm run dev`

6 - Ejecutar estos comandos de prisma :

```
npx prisma migrate dev
npx prisma generate

```

7 - Ejecutar el seed [crear la base de datos local todos](localhost:3000/api/seed)

# Prisma commands

- Inicializar prisma

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
