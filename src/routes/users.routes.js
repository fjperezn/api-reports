import { Router } from "express";
import { createUser, deleteUserById, getUserById, getUsers  } from "../controllers/users.controller.js";

const router=Router()

router.get('/users',getUsers);

router.post('/user',createUser); 

router.get('/user/:id',getUserById);

router.delete('/user/:id',deleteUserById);

export default router 

