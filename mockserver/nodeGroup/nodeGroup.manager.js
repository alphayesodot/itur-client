import jwt from 'jsonwebtoken';
import nodeGroups from './db.js';

class NodeGroupManager {
  static async getNodeGroups(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    const unitNodesGroup = nodeGroups.filter((nodeGroup) => nodeGroup.unitId === requester.unitId);
    if (requester.role === 'INTERVIEWER') {
      res.send(unitNodesGroup[0]);
    } else {
      res.send(unitNodesGroup || 404);
    }
  }
}

export default NodeGroupManager;
