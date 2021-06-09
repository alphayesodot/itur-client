import nodes from './db.js';

class NodeManager {
  static async getNodes(req, res) {
    res.send(nodes || 404);
  }
}

export default NodeManager;
