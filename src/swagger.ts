import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Employee & Branch Management API",
    version: "1.0.0",
    description: "API documentation for managing employees and branches",
  },
  servers: [
    {
      url: process.env.SWAGGER_SERVER_URL || "http://localhost:3000",
      description: "Development Server",
    },
  ],
  components: {
    schemas: {
      Employee: {
        type: "object",
        required: ["name", "position", "department", "email", "phone", "branchId"],
        properties: {
          id: { type: "integer", example: 1 },
          name: { type: "string", example: "John Doe" },
          position: { type: "string", example: "Software Engineer" },
          department: { type: "string", example: "IT" },
          email: { type: "string", format: "email", example: "john.doe@example.com" },
          phone: { type: "string", example: "9876543210" },
          branchId: { type: "integer", example: 3 },
        },
      },
      Branch: {
        type: "object",
        required: ["name", "address", "phone"],
        properties: {
          id: { type: "integer", example: 1 },
          name: { type: "string", example: "Vancouver Branch" },
          address: { type: "string", example: "1300 Burrard St, Vancouver, BC, V6Z 2C7" },
          phone: { type: "string", example: "604-456-0022" },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/api/v1/routes/*.ts", "./dist/api/v1/routes/*.js"], 
};

// Declare and export swaggerSpec 
export const swaggerSpec = swaggerJSDoc(options);

/**
 * Sets up Swagger UI in the Express application.
 */
export const setupSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger documentation available at /api-docs");
};
