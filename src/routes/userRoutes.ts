import express from "express";
import user from "../controller/UserController";
//import { validateResource } from "../middleware/validateResource";
//import { UserDto } from "../models/DTO/UserDto"; not yet complete

const router = express.Router();


router.get('/users', user.find);
router.get('/users/:id', user.findONe)
router.get('/users/minor', user.getAllMinors)
router.post('/register',  user.create);
router.patch('/users/:id', user.update);
router.delete('/users/:id', user.delete);


export default router;