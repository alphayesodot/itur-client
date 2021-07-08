import express from 'express';
import NodeGroupManager from './nodeGroup.manager.js';

const nodeGroupRouter = express.Router();

nodeGroupRouter.get('/', NodeGroupManager.getNodeGroups);
nodeGroupRouter.post('/', NodeGroupManager.createNodeGroup);
nodeGroupRouter.post('/:nodeGroupId/user/:userId', NodeGroupManager.addUserToNodeGroup);
nodeGroupRouter.put('/:id', NodeGroupManager.updateNodeGroup);
nodeGroupRouter.delete('/:id', NodeGroupManager.deleteNodeGroup);
nodeGroupRouter.delete('/:nodeGroupId/user/:userId', NodeGroupManager.removeUserFromNodeGroup);

export default nodeGroupRouter;
