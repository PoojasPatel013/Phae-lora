import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import dotenv from "dotenv"; // ✅ Load environment variables

import userRoutes from "./routes/users.js";
import reminderRoutes from "./routes/reminders.js";
import symptomRoutes from "./routes/symptoms.js";
import medicationRoutes from "./routes/medications.js";

dotenv.config(); // ✅ Ensure env variables are loaded

const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `windowMs`
});
app.use(limiter);


const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env file");
    }

    await connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Could not connect to MongoDB", err);
    process.exit(1); 
  }
};


app.use("/api/users", userRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/symptoms", symptomRoutes);
app.use("/api/medications", medicationRoutes);


connectDB();
