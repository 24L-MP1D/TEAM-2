import {Request, Response} from 'express';
import { handleUpload } from '../configs/cloudinary';
import "dotenv/config";


const uploader=async(req:Request, res:Response)=>{ 
    const files=req.files as Express.Multer.File[];
;
    if(!req.file) return res.status(400).send('No file uploaded');
    try{
        const promises: Promise<string>[] = [];

        files.forEach(file => {
            const b64 = Buffer.from(file.buffer).toString('base64');
            const dataURI = `data:${file.mimetype};base64,${b64}`
            promises.push(handleUpload(dataURI));
        })
    
        const uploadedImages: string[] =  await Promise.all(promises);      

        
        res.json(uploadedImages);
    }catch(error){
        res.status(400).send("Error uploading the file");

    }
}
export {uploader}
