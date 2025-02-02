import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { setupSwagger } from "./swagger";
import employeeRoutes from "./api/v1/routes/employee.routes";
import branchRoutes from "./api/v1/routes/branch.routes";

const app: Application = express(); 

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

// Setup Swagger Documentation
setupSwagger(app);

// API Routes
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/branches", branchRoutes);

// Health Check Endpoint
app.get("/health", (req: Request, res: Response): void => {
  res.status(200).send("Server is healthy"); 
});

// Only start the server if `app.ts` is directly executed
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app; // 
