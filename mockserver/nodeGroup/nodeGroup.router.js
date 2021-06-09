import express from 'express';
import NodeGroupManager from './nodeGroup.manager.js';

const nodeGroupRouter = express.Router();

nodeGroupRouter.get('/', NodeGroupManager.getNodesGroups);

export default nodeGroupRouter;
