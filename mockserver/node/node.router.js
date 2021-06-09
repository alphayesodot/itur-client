import express from 'express';
import NodeManager from './node.manager.js';

const nodeGroupRouter = express.Router();

nodeGroupRouter.get('/', NodeManager.getNodes);

export default nodeGroupRouter;
