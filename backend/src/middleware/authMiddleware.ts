import { NextFunction } from "express";

 async function Fetcher(pathname:string){
    const token=localStorage.getItem("authToken") || "";
    const data=await fetch(`http://localhost:4000${pathname}`,{
        headers:{
            authToken:token,
        }
    }).then((res)=>res.json());
    return data;
}


// function checkAuth(req:Request, res:Response, next:NextFunction){
//     const authToken=req.headers["authtoken"];
//     console.log(authToken);
//     if(!authToken){
//         return res.sendStatus(403);

//     }
//     if(!jwt.verify(authToken+"", authSecretKey)){
//         return res.sendStatus(403);
//     }
//     next();



export{Fetcher}