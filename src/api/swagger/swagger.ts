import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express User API",
      version: "1.0.0",
      description: "API documentation for managing users",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/api/routes/*.ts"], // Đường dẫn đến file route chứa chú thích Swagger
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express): void => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
