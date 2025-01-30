# User Management API

This is a simple Node.js application that provides a RESTful API for managing users. It includes functionality to create, retrieve, update, and delete users in a PostgreSQL database. The application uses Express.js for handling routes and pg-pool for database connection pooling.

## Features

- Create a new user
- Get user details by ID
- Update user details
- Delete a user
- PostgreSQL database for storing user data
- Basic authentication (protected routes)

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** Firebase (optional)
- **Environment Variables:** dotenv
- **ORM/Database Interaction:** pg-pool

## Setup

### 1. Install dependencies
 npm install

### 2. Set up environment variables
Create a .env file in the root directory and add the following variables:
PORT=3000
DB_USER="postgres"
DB_HOST="localhost"
DB_NAME="your-database-name"
DB_PASSWORD="your-database-password"
DB_PORT=5432

### 3. Set up PostgreSQL database
Make sure PostgreSQL is installed and running. Create the users table:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### 4. Run the application
Start the server by running:
node server.js

## API Endpoints

1. Create a user
URL: /api/users

Method: POST

Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
Response:
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "created_at": "2025-01-30T12:00:00Z"
}
2. Get user by ID
URL: /api/users/:id
Method: GET
Response:
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "created_at": "2025-01-30T12:00:00Z"
}
3. Update user details
URL: /api/users/:id

Method: PUT

Body:
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
Response:
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "created_at": "2025-01-30T12:00:00Z"
}
4. Delete a user
URL: /api/users/:id
Method: DELETE
Response:
{
  "message": "User deleted successfully"
}

## Testing
To test the API endpoints, you can use tools like Postman or Insomnia to make API requests.

## add serviceAccountKey.json 
 add this file in inside the backend folder while running