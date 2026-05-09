import { GalleryModel } from "../models/gallery.js";

export const getGalleryData = async (req, res) => {
  try {
    const data = await GalleryModel.find();

    return res
      .status(200)
      .json({ message: "Gallery Data fetched sucessfully !!", data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const dummyGalleryData = [
  {
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",

    redirectUrl: "https://instagram.com",

    category: 1,

    likes: 120,

    views: 500,
  },
];

export const addData = async (req, res) => {
  try {
    console.log("hitting");
    await GalleryModel.insertMany(dummyGalleryData);
    return res.status(201).json({ message: "Gallery Data add sucessfully !!" });
    console.log("Dummy Data Inserted");
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
