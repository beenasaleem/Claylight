import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },

    subtitle: {
      type: String
    },

    image: {
      type: String,
      required: true
    },

    link: {
      type: String
    },

    active: {
      type: Boolean,
      default: true
    },

    position: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
);

export default mongoose.model("Banner", bannerSchema);
