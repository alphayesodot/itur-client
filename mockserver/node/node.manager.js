import jwt from 'jsonwebtoken';
import nodes from './db.js';
import Role from '../user/enum.js';

class NodeManager {
  static async getNodes(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([
      Role.Interviewer,
      Role.Technical,
      Role.Mada].includes(requester.role)) {
      res.send(nodes);
    } else if (
      [Role.RamadIturOfUnit, Role.ProfessionalRamad, Role.RamadIturAssistant]
        .includes(requester.role)) {
      const nodesOfUnit = nodes.filter((node) => node.unitId === requester.unitId);
      res.send(nodesOfUnit);
    } else {
      res.status(400).send('BROKEN');
    }
  }

  static async updateNode(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([Role.Technical, Role.RamadIturOfUnit].includes(requester.role)) {
      const nodeIndex = nodes.findIndex((node) => node.id === req.params.id.toString());
      if (nodeIndex > -1) {
        if (req.body.name) nodes[nodeIndex].name = req.body.name;
        if (req.body.nodeGroupId !== undefined) {
          if (requester.role !== Role.RamadIturOfUnit) res.status(400).send('BROKEN');
          nodes[nodeIndex].nodeGroupId = req.body.nodeGroupId;
        }
        if (req.body.type) {
          if (req.body.type === 'INTERVIEW' && !req.body.unitId) res.status(400).send('BROKEN');
          nodes[nodeIndex].type = req.body.type;
        }
        if (req.body.unitId) {
          nodes[nodeIndex].unitId = req.body.unitId;
          nodes[nodeIndex].nodeGroupId = '';
        }
        res.send(nodes[nodeIndex]);
      }
    } else {
      res.status(400).send('BROKEN');
    }
  }

  static getNodeById(req, res) {
    res.send(nodes.find((node) => node.id === req.params.id));
  }
}

export default NodeManager;
