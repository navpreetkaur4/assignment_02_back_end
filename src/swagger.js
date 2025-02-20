"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
var swagger_jsdoc_1 = require("swagger-jsdoc");
var swagger_ui_express_1 = require("swagger-ui-express");
var swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Employee & Branch Management API",
        version: "1.0.0",
        description: "API documentation for managing employees and branches",
    },
    servers: [{ url: "http://localhost:3000" }],
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
    paths: {},
};
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ["./src/api/v1/routes/*.ts", "./dist/api/v1/routes/*.js"],
};
var swaggerSpec = (0, swagger_jsdoc_1.default)(options);
var setupSwagger = function (app) {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
};
exports.setupSwagger = setupSwagger;
