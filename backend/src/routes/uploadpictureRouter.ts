import express from 'express';
import Multer, {memoryStorage} from "multer";
import { uploader } from '../controllers/uploadpictureController';


const uploadRouter=express.Router();

const storage=memoryStorage()
const multer=Multer({storage})

uploadRouter.post("/upload",multer.single("image"), uploader)
export {uploadRouter}
