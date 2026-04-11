# Development

Pasos para levantar la app en desarrollo

1 - levantar la base de datos

```bash
docker-compose up -d
```

2 - Renombar el .env.temmplate a .env

3 - Reemplazar las variables de entorno

4 - Ejecutar el seed [crear la bse de datos local](localhost:3000/api/seed)

# Prisma commands

- Inicializar prisma

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
