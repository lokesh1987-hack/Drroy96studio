import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },

    redirectUrl: {
      type: String,
    },

    category: {
      type: Number,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const GalleryModel = mongoose.model("Gallery", gallerySchema);
