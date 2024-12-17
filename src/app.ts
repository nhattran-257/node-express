import express from "express";
import cors from "cors";
// import morgan from "morgan";
import userRoutes from "./api/routes/user.route";
import { setupSwagger } from "./api/swagger/swagger";

const app = express();

// Middleware
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Swagger
setupSwagger(app);

export default app;
