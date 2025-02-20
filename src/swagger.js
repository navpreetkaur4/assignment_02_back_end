// src/swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
   swaggerDefinition: {
       info: {
           title: 'API Docs',
           version: '1.0.0',
           description: 'API documentation',
       },
   },
   apis: ['./src/api/v1/routes/*.ts', './dist/api/v1/routes/*.js'], // Adjust paths
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
