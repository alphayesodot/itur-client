import jwt from 'jsonwebtoken';
import nodeGroups from './db.js';
import { generateId } from '../utils.js';
import Role from '../user/enum.js';

class NodeGroupManager {
  static async getNodeGroups(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if (requester.role === Role.Interviewer) {
      res.send(nodeGroups[0]);
    } else {
      res.send(nodeGroups);
    }
  }
  static async createNodeGroup(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([Role.RamadIturOfUnit].includes(requester.role) && req.body.name) {
      const newNodeGroup = {
        id: generateId(),
        name: req.body.name,
        usersIds: [],
        unitId: requester.unitId,
      };
      nodeGroups.push(newNodeGroup);
      res.send(newNodeGroup);
    } else {
      res.status(400).send('BROKEN');
    }
  }

  static async updateNodeGroup(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([Role.RamadIturOfUnit].includes(requester.role) || !req.body.name) {
      const nodeGroupIdx = nodeGroups.findIndex(
        (nodeGroup) => nodeGroup.id === req.params.id.toString(),
      );
      nodeGroups[nodeGroupIdx].name = req.body.name;
      if (req.body.usersIds) nodeGroups[nodeGroupIdx].usersIds = req.body.usersIds;
      res.send(nodeGroups[nodeGroupIdx]);
    } else {
      res.status(400).send('BROKEN');
    }
  }

  static async deleteNodeGroup(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([Role.RamadIturOfUnit].includes(requester.role) || !req.body.name) {
      const nodeGroupIdx = nodeGroups.findIndex(
        (nodeGroup) => nodeGroup.id === req.params.id.toString(),
      );
      const deletedNodeGroup = nodeGroupIdx > -1 && nodeGroups[nodeGroupIdx];
      if (nodeGroupIdx > -1) {
        nodeGroups.splice(nodeGroupIdx, 1);
      }
      res.send(deletedNodeGroup);
    } else {
      res.status(400).send('BROKEN');
    }
  }

  static async addUserToNodeGroup(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([Role.RamadIturOfUnit].includes(requester.role)) {
      const nodeGroupIdx = nodeGroups.findIndex(
        (nodeGroup) => nodeGroup.id === req.params.nodeGroupId.toString(),
      );
      if (nodeGroupIdx > -1) {
        nodeGroups[nodeGroupIdx].usersIds.push(req.params.userId);
      }
      res.send(nodeGroups[nodeGroupIdx]);
    } else {
      res.status(400).send('BROKEN');
    }
  }

  static async removeUserFromNodeGroup(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([Role.RamadIturOfUnit].includes(requester.role)) {
      const nodeGroupIdx = nodeGroups.findIndex(
        (nodeGroup) => nodeGroup.id === req.params.nodeGroupId.toString(),
      );
      if (nodeGroupIdx > -1) {
        const userIdx = nodeGroups[nodeGroupIdx].usersIds.indexOf(req.params.userId.toString());
        if (userIdx > -1) {
          nodeGroups[nodeGroupIdx].usersIds.splice(userIdx, 1);
        }
      }
      res.send(nodeGroups[nodeGroupIdx]);
    } else {
      res.status(400).send('BROKEN');
    }
  }
}

export default NodeGroupManager;
