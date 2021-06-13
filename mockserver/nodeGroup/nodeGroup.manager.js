import jwt from 'jsonwebtoken';
import nodeGroups from './db.js';
import { generateId } from '../utils.js';

class NodeGroupManager {
  static async getNodeGroups(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if (requester.role === 'INTERVIEWER') {
      res.send(nodeGroups[0]);
    } else {
      res.send(nodeGroups);
    }
  }
  static async createNodeGroup(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if (['RAMAD_ITUR_OF_UNIT', 'MADA'].includes(requester.role)) {
      const newNodeGroup = {
        id: generateId(),
        name: req.body.name,
        usersIds: [],
        unitId: requester.unitId,
      };
      nodeGroups.push(newNodeGroup);
      res.send(newNodeGroup);
    } else {
      throw new Error('BROKEN');
    }
  }
}

export default NodeGroupManager;
