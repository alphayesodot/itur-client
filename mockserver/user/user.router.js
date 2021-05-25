import express from 'express';
import users from './db.js';

const userRouter = express.Router();

userRouter.get('/:id', (req, res) => {
  res.send(users.find((user) => user._id === req.params.id));
});

export default userRouter;
