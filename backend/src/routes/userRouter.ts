import express from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/userController';
const userRouter=express.Router();

userRouter
    .get("/users", getUsers)
    .post("/users", createUser)
    .put("/users/:id", updateUser)
    .delete("/users/:id", deleteUser)

    export {userRouter};

