# 🚀 Todo App

Aplicación Full Stack construida con Next.js, Prisma y PostgreSQL.

---

# 📦 Tecnologías

- Next.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker
- TailwindCSS
- Auth.js

---

# ⚙️ Development

Sigue estos pasos para levantar la aplicación en desarrollo.

## 1. Levantar la base de datos

```bash
docker-compose up -d
```

---

## 2. Configurar variables de entorno

Crear una copia del archivo `.env.template` y renombrarla a `.env`.

```bash
cp .env.template .env
```

Luego reemplaza las variables de entorno correspondientes.

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Configurar Prisma

Ejecutar las migraciones y generar el cliente de Prisma.

```bash
npx prisma migrate dev
npx prisma generate
```

---

## 5. Levantar el servidor de desarrollo

```bash
npm run dev
```

---

## 6. Ejecutar el seed de la base de datos

Abrir en el navegador:

```bash
http://localhost:3000/api/seed
```

Esto creará datos iniciales para desarrollo.

---

# 🔑 Usuario de prueba

| Campo    | Valor            |
| -------- | ---------------- |
| Email    | test1@google.com |
| Password | 123456           |

---

# 🛠 Prisma Commands

## Inicializar Prisma

```bash
npx prisma init
```

---

## Crear una migración

```bash
npx prisma migrate dev --name nombre_migracion
```

---

## Generar Prisma Client

```bash
npx prisma generate
```

---

# 🐳 Docker

## Levantar contenedores

```bash
docker-compose up -d
```

## Detener contenedores

```bash
docker-compose down
```
