import { Router } from "express";
import { createCategory, deleteCategoryById, getCategories, getCategoryById  } from "../controllers/categories.controller.js";

const router=Router()

router.get('/categories',getCategories);

router.get('/category/:id',getCategoryById);

router.post('/category',createCategory); 

 router.delete('/category/:id',deleteCategoryById);

export default router 

