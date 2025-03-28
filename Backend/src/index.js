import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 5001;
// ✅ Middleware should come before routes
app.use(express.json()); // Enable JSON parsing
app.use(cookieParser())
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port : ${PORT}`);
    connectDB();
});
