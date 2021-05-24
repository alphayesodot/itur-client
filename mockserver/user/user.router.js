import express from 'express';
import UserManager from './user.manager.js';
import users from './db.js';

const userRouter = express.Router();

userRouter.get('/:id', UserManager.getUsersByUnitId);
userRouter.post('/', UserManager.createUser);

userRouter.get('/:id', (req, res) => {
  res.send(users.find((user) => user._id === req.params.id));
});

export default userRouter;
