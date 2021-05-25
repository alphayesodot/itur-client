import express from 'express';
import nodeGroups from './db.js';

const nodeGroupRouter = express.Router();

nodeGroupRouter.get('/', (req, res) => {
  res.send(nodeGroups);
});

export default nodeGroupRouter;
