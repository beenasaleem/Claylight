import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

/* CREATE CATEGORY */
router.post("/", async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Failed to create category" });
  }
});

/* GET ACTIVE CATEGORIES */
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({ active: true }).sort({ position: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

/* UPDATE CATEGORY */
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Failed to update category" });
  }
});

/* DELETE CATEGORY (optional) */
router.delete("/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete category" });
  }
});

export default router;
