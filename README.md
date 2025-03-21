# Employee & Branch Management API

This is a secure and well-documented RESTful API for managing employees and branches in an organization. It provides a complete CRUD interface and follows best practices in backend development, including security features like Helmet.js, CORS, and the use of environment variables.

---

## Project Overview

The purpose of this API is to allow organizations to manage employee records and branch locations securely and efficiently.

Key Features:
- CRUD operations for employees and branches
- Secure access using environment variables
- Comprehensive API documentation with Swagger (OpenAPI)
- Middleware support (Helmet.js, CORS, Morgan)
- Well-structured TypeScript codebase

---

## Installation Instructions

Follow these steps to install and run the project locally:

### Clone the Repository

```bash
git clone https://github.com/navpreetkaur4/assignment_02_back_end.git
cd assignment_02_back_end
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file at the root of your project and configure the following:

```env
PORT=3000
NODE_ENV=development
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-firebase-service-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
ALLOWED_ORIGINS=http://localhost:3000
SWAGGER_SERVER_URL=http://localhost:3000
```

## Never commit your `.env` file to GitHub. Always create a `.env.example` to share required keys.

---

## Link to Public Documentation

The OpenAPI/Swagger docs are publicly available on GitHub Pages:

**Public API Docs** → [Click here to view](https://navpreetkaur4.github.io/assignment-02-api-docs/)

---

## Accessing OpenAPI Locally

Once the server is running, access the local Swagger UI at:

```
http://localhost:3000/api-docs
```

---

## Example Usage (TypeScript)

Here’s a TypeScript example to **create a new employee** using Axios:

```ts
import axios from "axios";

async function createEmployee() {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/employees", {
      name: "Jane Doe",
      position: "Manager",
      department: "Human Resources",
      email: "jane.doe@example.com",
      phone: "9876543210",
      branchId: 2,
    });

    console.log("Employee created:", response.data);
  } catch (error) {
    console.error("Error creating employee:", error);
  }
}

createEmployee();
```

---

## Example Requests & Responses

### Create Employee — Request
```json
POST /api/v1/employees
{
  "id": 1,
  "name": "John Doe",
  "position": "Software Engineer",
  "department": "IT",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "branchId": 3
}
```

### Create Employee — Response
```json
{
  "id": 1742523820108,
  "name": "John Doe",
  "position": "Software Engineer",
  "department": "IT",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "branchId": 3
}
```

---

## Secure Setup Instructions

### Managing Sensitive Information

- All secrets and credentials are stored using environment variables.
- Use `.env` locally and `.env.example` for sharing variable structure.
- Never expose Firebase credentials, private keys, or database URLs in code.

### `.env.example` Template

```env
PORT=3000
NODE_ENV=development
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-firebase-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nYOUR_KEY\\n-----END PRIVATE KEY-----\\n"
ALLOWED_ORIGINS=http://localhost:3000
SWAGGER_SERVER_URL=http://localhost:3000
```

---

## Available Scripts

Command                Description                                  

`npm run dev`         : Start the development server                 
`npm run build`       :Compile TypeScript to JavaScript             
`npm run test`        :Run unit tests                               
`npm run generate-docs`:  Generate OpenAPI documentation JSON        
`npm run deploy-docs` :Deploy API docs to GitHub Pages              

---

## Deployment

Once deployed, your API documentation is accessible via GitHub Pages. This allows front-end or external developers to easily view all available endpoints, schemas, and request/response formats.

---

## Contributing

We welcome contributions! Follow the standard process:

```bash
# Fork the repo and create your branch
git checkout -b feature/my-new-feature

# Make your changes, then commit
git commit -m "feat: added new employee route"

# Push and create a Pull Request
git push origin feature/my-new-feature
```

---