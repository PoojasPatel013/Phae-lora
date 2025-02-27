import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import medicationRoutes from "./routes/medications.js";
import symptomRoutes from "./routes/symptoms.js";
import dashboardRoutes from "./routes/dashboard.js";
import auth from "./middleware/auth.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // Restrict to frontend domain
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// MongoDB connection error handling
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB Error:", err);
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/medications", auth, medicationRoutes);
app.use("/api/symptoms", auth, symptomRoutes);

app.use("/api/dashboard", auth, dashboardRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);

// Graceful Shutdown Handling
process.on("SIGINT", async () => {
  console.log("🔄 Closing server and database connection...");
  await mongoose.connection.close();
  server.close(() => {
    console.log("💾 Database disconnected, Server shut down.");
    process.exit(0);
  });
});
