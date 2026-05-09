import express from "express";
import { getGalleryData,addData } from "../controller/getGalleryData.js";

const router=express.Router();

router.get("/getdata",getGalleryData);
router.post("/adddata",addData);

export default router;