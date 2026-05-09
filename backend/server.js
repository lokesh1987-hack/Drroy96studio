import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import galleryRoute from "./route/getGalleryData.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const url = process.env.MONGODB_URL;

app.get("/", (req, res) => {
  res.send("backend is running !!");
});

app.use("/gallery",galleryRoute);

const start = async (req, res) => {
  try {
    app.listen("8080", () => {
      console.log("server is RUNNING !!");
    });

    await mongoose.connect(url);
    console.log("DataBase Conntected!!");
  } catch (e) {
    console.log(e);
  }
};

start();
