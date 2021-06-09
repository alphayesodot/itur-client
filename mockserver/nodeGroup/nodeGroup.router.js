import express from 'express';
import NodeGroupManager from './nodeGroup.manager.js';

const nodeGroupRouter = express.Router();

// nodeGroupRouter.get('/', NodeGroupManager.getNodeGroups);
nodeGroupRouter.get('/', NodeGroupManager.getNodesGroupsByUnit);

export default nodeGroupRouter;
