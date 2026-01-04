import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/products.js";
import bannerRoutes from "./routes/banners.js";
import path from "path";
import { fileURLToPath } from "url";
import categoryRoutes from "./routes/categories.js";


const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* PATH SETUP */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* 🔴 STATIC FILES — MUST COME FIRST */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* DATABASE */
mongoose
  .connect("mongodb://127.0.0.1:27017/claylight")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

/* ROUTES */
app.use("/api/products", productRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/categories", categoryRoutes);


/* SERVER */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
