import {Request, Response} from 'express';
import { handleUpload } from '../configs/cloudinary';

const uploader=async(req:Request, res:Response)=>{
    if(!req.file) return res.status(400).send('No file uploaded');
    try{
        const b64=Buffer.from(req.file.buffer).toString('base64');
        const dataURI=`data:${req.file.mimetype};base64,${b64}`;

        const uploaderRes=await handleUpload(dataURI);

        res.status(201).send(uploaderRes);

    }catch(error){
        res.status(400).send("Error uploading the file");

    }
}
export {uploader}
