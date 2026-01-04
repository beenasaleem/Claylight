import express from "express";
import Banner from "../models/Banner.js";

const router = express.Router();

/* CREATE BANNER */
router.post("/", async (req, res) => {
  try {
    const banner = new Banner(req.body);
    await banner.save();
    res.status(201).json(banner);
  } catch (error) {
    res.status(500).json({ message: "Failed to create banner" });
  }
});

/* GET ALL ACTIVE BANNERS */
router.get("/", async (req, res) => {
  try {
    const banners = await Banner.find({ active: true }).sort({ position: 1 });
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch banners" });
  }
});

/* UPDATE BANNER */
router.put("/:id", async (req, res) => {
  try {
    const banner = await Banner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: "Failed to update banner" });
  }
});

/* DELETE BANNER (optional) */
router.delete("/:id", async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.json({ message: "Banner deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete banner" });
  }
});

export default router;
