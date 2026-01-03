import express from "express";
import Product from "../models/Product.js";
import multer from "multer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temporary folder

router.post("/bulk", upload.array("images"), async (req, res) => {
  try {
    const productsData = JSON.parse(req.body.products);
    const savedProducts = [];
    let fileIndex = 0;

    for (let product of productsData) {
      const productImages = [];

      for (let i = 0; i < product.numImages; i++) {
        const file = req.files[fileIndex];

        const result = await cloudinary.uploader.upload(file.path, {
          folder: `claylight_products/${product.category || "general"}`,
        });

        fs.unlinkSync(file.path);
        productImages.push(result.secure_url);
        fileIndex++;
      }

      const newProduct = new Product({
        ...product,
        images: productImages,
      });

      const saved = await newProduct.save();
      savedProducts.push(saved);
    }

    res.status(201).json(savedProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
