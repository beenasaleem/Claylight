import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  description: { type: String },
  content: { type: String },
  inStock: { type: Boolean, default: true },
  image: { type: String }, // will store URL or local path
});

export default mongoose.model("Product", ProductSchema, "products");
