import express from 'express';
import UserManager from './user.manager.js';

const userRouter = express.Router();

userRouter.get('/', UserManager.getUsers);
userRouter.post('/', UserManager.createUser);
userRouter.get('/:id', UserManager.getUserById);
userRouter.get('/me/unit', UserManager.getMyUnit);

export default userRouter;
