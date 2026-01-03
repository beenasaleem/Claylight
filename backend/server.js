import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/products.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";



const app = express();
const PORT = 5000;

// Parse JSON bodies
app.use(express.json());

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/claylight")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
