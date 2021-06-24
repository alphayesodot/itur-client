import express from 'express';
import NodeManager from './node.manager.js';

const nodeRouter = express.Router();

nodeRouter.get('/', NodeManager.getNodes);
nodeRouter.put('/:id', NodeManager.updateNode);

export default nodeRouter;
