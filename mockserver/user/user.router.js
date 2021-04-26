import express from 'express';
import UserManager from './user.manager';

const userRouter = express.Router();

userRouter.get('/user/:id', UserManager.getUsersByUnitId);

export default userRouter;
