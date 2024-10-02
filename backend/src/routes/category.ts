import express from "express";
import { getProducts } from "../controllers/productController";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controllers/categoryController";
const categoryRouter=express.Router();
    categoryRouter
        .get("/categories", getCategories)
        .post("/category", createCategory)
        .put("/category/:id", updateCategory)
        .delete("/category/:id", deleteCategory)

    export{categoryRouter}