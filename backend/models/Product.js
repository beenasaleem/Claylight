import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    subtitle: String,

    price: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    images: {
      type: [String],
      required: true
    },

    description: {
      type: String,
      required: true
    },

    ingredients: {
      type: String
    },

    care: {
      type: String
    },

    burnTime: {
      type: String
    },

    size: {
      type: String
    },

    fragranceNotes: {
      top: [String],
      middle: [String],
      base: [String]
    },

    inStock: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
