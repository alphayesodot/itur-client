import nodeGroups from './db.js';

class NodeGroupManager {
  static async getNodeGroups(req, res) {
    res.send(nodeGroups);
  }
}

export default NodeGroupManager;
