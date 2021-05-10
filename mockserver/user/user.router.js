import express from 'express';
import UserManager from './user.manager.js';

const userRouter = express.Router();

userRouter.get('/:id', UserManager.getUsersByUnitId);
userRouter.post('/:id', UserManager.createUser);

export default userRouter;
