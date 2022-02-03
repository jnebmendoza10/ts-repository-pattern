import express from 'express';
import { myContainer } from '../di-config/inversify.config';
import { UserController } from '../controllers/UserController';
import { types } from '../di-config/types';
import { UserService } from '../services/UserService';


const router = express.Router();

const service  = myContainer.get<UserService>(UserService);

const userController = new UserController(service);

router.post('/register', userController.addUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:userId?', userController.getOneUser);
router.patch('/edit/user/:userId?', userController.editUser);
router.delete('/delete/user/:userId?', userController.deleteUser);


export default router;

