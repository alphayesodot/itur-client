import jwt from 'jsonwebtoken';
import nodes from './db.js';
import Role from '../user/enum.js';

class NodesManager {
  static async getNodes(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([
      Role.Interviewer,
      Role.RamadIturAssistant,
      Role.Technical,
      Role.ProfessionalRamad,
      Role.RamadIturOfUnit,
      Role.Mada].includes(requester.role)) {
      const nodesOfUnit = nodes.filter((node) => node.unitId === requester.unitId);
      res.send(nodesOfUnit);
    } else {
      res.status(400).send('BROKEN');
    }
  }
}

export default NodesManager;
