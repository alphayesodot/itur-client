import express from 'express';
import NodeManager from './node.manager.js';

const nodeRouter = express.Router();

nodeRouter.get('/', NodeManager.getNodes);

export default nodeRouter;
