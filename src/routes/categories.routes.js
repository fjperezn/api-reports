import { Router } from "express";
import { getCategories, getCategoryById  } from "../controllers/categories.controller";

const router=Router()

router.get('/categories',getCategories);

router.get('/category/:id',getCategoryById);

router.post('/category',createUser); 

// router.get('/user/:id',getUserById);

// router.delete('/user/:id',deleteUserById);

export default router 

