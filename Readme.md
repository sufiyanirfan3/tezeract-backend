# Tezeract Backend

This is the backend for Tezeract online assessment project.

## Setup

1. Install dependencies:

   ```bash
   npm install

   ```

2. Run the project
   ```bash
   npm run dev
   ```

# ENV variables

Create a .env file in the root directory and add the necessary environment variables:

PORT=3000

db=tezeract

username=dbUserName

password=dbPassword

host=localhost

dialect=mysql

# Project Structure

app.js: Entry point for the application.

src/models: Directory containing Sequelize models.

src/routes/employee/employee.js: Express routes for employee-related endpoints.

src/controllers/employee/controller.js: Controller functions for employee-related endpoints.

# Available Endpoints

GET /employee/avgSalary: Get the average salary of employees.

GET /employee/filterByExperience: Filter employees by experience level.

GET /employee/topEarners: Get the top earners in the company.

GET /employee/retentionRateByDepartment: Calculate employee retention rate by department.

GET /employee/filterBySalaryRange: Filter employees by salary

# Dependencies

Express: Web application framework.

Sequelize: ORM for MySQL.

Cors: Middleware for handling Cross-Origin Resource Sharing.

Dotenv: Load environment variables from a .env file.

MySQL2: MySQL library for Node.js.

Nodemon: Development utility for automatically restarting the server.

# Scripts

npm start: Start the server.

npm run dev: Start the server in development mode using Nodemon.
