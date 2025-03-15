
# Authentication API

A RESTful API built with Express.js for Coding test Adhivasindo.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Prisma
- Axios
- JWT Authentication
- Swagger UI for API documentation

## Prerequisites

- Node.js (v20 or higher)
- PostgreSQL database
- npm package manager

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Install Dependencies:
    ```bash
    npm install
    ```

3. Configure Environment Variables:
    ```dotenv
    PORT=3000
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=your_db_name
    SECRET_KEY=your_jwt_secret
    ```

4. Migration using prisma
    ```bash
    npx prisma migrate dev --name init
    ```
5. Running program
   ```bash
   npm run dev
    ```

## Features
- Express.js REST API
- JWT Authentication
- PostgreSQL Database integration
- Prisma Database migration
- API Documentation with Swagger UI
- Route protection with express-jwt
- Axios for HTTP requests

## API Documentation
The API documentation is available through Swagger UI at /api-docs endpoint when running the server.

## Available Routes
- / - Main Router
- /api/auth - Authentication
- /api/user - User CRUD
- /api/student - From API
- /api-docs - Swagger UI documentation