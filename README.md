# 🏧 ATM API - Sistema de Cajeros Automáticos

> **API REST para la gestión de operaciones bancarias en cajeros automáticos digitales**

[![Node.js](https://img.shields.io/badge/Node.js-16.19.1-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-blue)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Descripción

Este proyecto es una **API REST robusta** desarrollada para simular las operaciones principales de un cajero automático (ATM). Permite gestionar cuentas bancarias, realizar transacciones seguras, y mantener un historial completo de operaciones.

### ✨ Características Principales

- 🔐 **Autenticación JWT** - Sistema de autenticación seguro
- 💰 **Transacciones Bancarias** - Retiros, depósitos, consultas de saldo
- 📊 **Historial de Transacciones** - Registro completo de operaciones
- 🔒 **Validación de Datos** - Validación robusta con Joi
- 📚 **Documentación Swagger** - API documentada y probada
- 🐳 **Dockerizado** - Fácil despliegue con Docker
- 🗄️ **Base de Datos PostgreSQL** - Persistencia confiable de datos

## 🏗️ Arquitectura del Proyecto

```
backend/
├── src/
│   ├── config/          # Configuraciones de base de datos y aplicación
│   ├── controllers/     # Lógica de controladores
│   ├── database/        # Configuración y conexión a PostgreSQL
│   ├── helpers/         # Funciones auxiliares
│   ├── middlewares/     # Middlewares de autenticación y validación
│   ├── models/          # Modelos de Sequelize
│   ├── routes/          # Definición de rutas de la API
│   ├── schemas/         # Esquemas de validación con Joi
│   ├── services/        # Lógica de negocio
│   ├── app.js          # Configuración principal de Express
│   └── index.js        # Punto de entrada de la aplicación
├── .gitignore
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.yml
├── docker-compose.dev.yml
├── package.json
└── package-lock.json
```

## 🚀 Tecnologías Utilizadas

### Backend
- **[Node.js](https://nodejs.org/)** - Entorno de ejecución de JavaScript
- **[Express.js](https://expressjs.com/)** - Framework web para Node.js
- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Sequelize](https://sequelize.org/)** - ORM para Node.js

### Seguridad y Validación
- **[JSON Web Tokens (JWT)](https://jwt.io/)** - Autenticación stateless
- **[Joi](https://joi.dev/)** - Validación de esquemas de datos
- **[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)** - Manejo de políticas de origen cruzado

### Documentación y Desarrollo
- **[Swagger](https://swagger.io/)** - Documentación interactiva de la API
- **[Morgan](https://github.com/expressjs/morgan)** - Logger de peticiones HTTP
- **[Nodemon](https://nodemon.io/)** - Auto-recarga en desarrollo

### DevOps
- **[Docker](https://www.docker.com/)** - Containerización
- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestación de contenedores

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js >= 16.19.1
- PostgreSQL >= 12
- Docker & Docker Compose (opcional)

### 📦 Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jeanc4rl02/ATM.git
   cd ATM/backend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar .env con tus configuraciones
   ```

4. **Configurar base de datos PostgreSQL**
   ```bash
   # Crear base de datos
   createdb atm_database
   ```

5. **Ejecutar migraciones**
   ```bash
   npm run migrate
   ```

6. **Iniciar en modo desarrollo**
   ```bash
   npm run dev
   ```

### 🐳 Instalación con Docker

1. **Usando Docker Compose (Recomendado)**
   ```bash
   # Clonar repositorio
   git clone https://github.com/jeanc4rl02/ATM.git
   cd ATM/backend
   
   # Ejecutar en modo desarrollo
   docker-compose -f docker-compose.dev.yml up -d
   
   # O en modo producción
   docker-compose up -d
   ```

2. **Verificar que los servicios estén ejecutándose**
   ```bash
   docker-compose ps
   ```

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Ejecuta la aplicación en modo producción |
| `npm run dev` | Ejecuta la aplicación en modo desarrollo con hot-reload |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run migrate` | Ejecuta las migraciones de base de datos |
| `npm run seed` | Ejecuta los seeders para datos iniciales |

## 📚 Documentación de la API

### Base URL
```
http://localhost:3000/api/v1
```

### Swagger UI
Una vez que la aplicación esté ejecutándose, puedes acceder a la documentación interactiva en:
```
http://localhost:3000/api-docs
```

### Endpoints Principales

#### 🔐 Autenticación
```http
POST /auth/login
POST /auth/register
POST /auth/logout
```

#### 💳 Gestión de Cuentas
```http
GET /accounts          # Obtener todas las cuentas
GET /accounts/:id      # Obtener cuenta específica
POST /accounts         # Crear nueva cuenta
PUT /accounts/:id      # Actualizar cuenta
DELETE /accounts/:id   # Eliminar cuenta
```

#### 💰 Transacciones
```http
POST /transactions/withdraw    # Realizar retiro
POST /transactions/deposit     # Realizar depósito
GET /transactions/balance      # Consultar saldo
GET /transactions/history      # Historial de transacciones
```

### Ejemplo de Uso

#### Autenticación
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "password123"
  }'
```

#### Realizar Retiro
```bash
curl -X POST http://localhost:3000/api/v1/transactions/withdraw \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "amount": 100000,
    "accountId": "uuid-account-id"
  }'
```

## 👥 Equipo de Desarrollo

Este proyecto fue desarrollado en equipo por:

- **Juan Gámez** - [@megof](https://github.com/megof)
- **Andersson Córdoba** - Backend Developer
- **David Ospina** - Backend Developer  
- **Jean Carlos Carrillo** - [@jeanc4rl02](https://github.com/jeanc4rl02) - Backend Developer

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Usar ESLint para mantener consistencia
- Seguir convenciones de naming en JavaScript
- Documentar funciones y métodos complejos
- Escribir tests para nuevas funcionalidades

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes una sugerencia:

1. Verifica que el problema no haya sido reportado anteriormente
2. Crea un [nuevo issue](https://github.com/jeanc4rl02/ATM/issues/new)
3. Proporciona información detallada sobre el problema
4. Incluye pasos para reproducir el error

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🔗 Enlaces Útiles

- [Documentación de Express.js](https://expressjs.com/)
- [Guía de Sequelize](https://sequelize.org/docs/v6/)
- [Documentación de PostgreSQL](https://www.postgresql.org/docs/)
- [Swagger/OpenAPI Specification](https://swagger.io/specification/)

---

<div align="center">
  <p>Desarrollado con ❤️ por el equipo de ATM API</p>
  <p>
    <a href="#-atm-api---sistema-de-cajeros-automáticos">⬆️ Volver al inicio</a>
  </p>
</div>