import express from 'express';
import UserManager from './user.manager.js';

const userRouter = express.Router();

userRouter.get('/:id', UserManager.getUsersByUnitId);

export default userRouter;
