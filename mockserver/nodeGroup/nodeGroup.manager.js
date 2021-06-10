import nodeGroups from './db.js';

class NodeGroupManager {
  static async getNodeGroups(req, res) {
    res.send(nodeGroups);
  }
  static async createNodeGroup(req, res) {
    const newNodeGroup={};
    nodeGroups.push()
    res.send()
  }
}

export default NodeGroupManager;
