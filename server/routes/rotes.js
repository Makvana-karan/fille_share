import express from "express";
import { uploadImage, downloadimg } from "../controller/image.controller.js";
import upload from "../utils/upload.middleware.js";
const router = express.Router();

router.post("/upload", upload.single("files"), uploadImage);
router.get("/files/:fileid", download);

export default router;
