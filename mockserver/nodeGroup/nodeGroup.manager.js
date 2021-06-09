import jwt from 'jsonwebtoken';
import nodeGroups from './db.js';

class NodeGroupManager {
  static async getNodeGroups(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if (requester.role === 'INTERVIEWER') {
      res.send(nodeGroups[0]);
    } else {
      res.send(nodeGroups);
    }
  }
  static async getNodesGroupsByUnit(req, res) {
    const unitNodesGroup = nodeGroups.filter((nodeGroup) => nodeGroup.unit === req.params.unitId);
    res.send(unitNodesGroup || 404);
  }
}

export default NodeGroupManager;
