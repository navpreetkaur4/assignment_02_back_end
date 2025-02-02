import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

// Swagger Configuration
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Employee & Branch Management API",
    version: "1.0.0",
    description: "API documentation for managing employees and branches",
  },
  servers: [
    {
      url: "http://localhost:3000", 
    },
  ],
  tags: [
    { name: "Employees", description: "Operations related to employees" },
    { name: "Branches", description: "Operations related to branches" },
    { name: "Health Check", description: "Health check endpoint" },
  ],
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ["./src/api/v1/routes/*.ts"], 
};

// Initialize Swagger Docs
const swaggerSpec = swaggerJSDoc(options);

// Function to Setup Swagger in Express App
export const setupSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
