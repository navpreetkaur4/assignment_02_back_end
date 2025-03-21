import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { setupSwagger } from "./swagger";
import employeeRoutes from "./api/v1/routes/employee.routes";
import branchRoutes from "./api/v1/routes/branch.routes";

// Load environment variables before using them
dotenv.config();

const app: Application = express();

// Define allowed origins Trusted Domain
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000"]; 

// Configure CORS
app.use(
  cors({
    origin: allowedOrigins, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true, 
  })
);

// Middleware
app.use(express.json()); 
app.use(helmet()); 
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

// Start the server only if executed directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
