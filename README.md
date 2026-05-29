# Trabajo Práctico Final - TP2

Proyecto de Node.js con Express, Sequelize y arquitectura MVC para un API RESTful.

## Requisitos previos

- Node.js (v14 o superior)
- npm
- MySQL

## Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar las dependencias**
```bash
npm install
```

3. **Configurar las variables de entorno**

Edita el archivo `.env` con tus credenciales de base de datos:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=trabajo_practico_db
SERVER_PORT=3000
NODE_ENV=development
```

4. **Crear la base de datos** (opcional, Sequelize la crea automáticamente)

```bash
npm run db:create
```

5. **Ejecutar migraciones** (si las tienes configuradas)

```bash
npm run db:migrate
```