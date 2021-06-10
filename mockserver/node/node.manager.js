import nodes from './db.js';

class NodeManager {
  static async getNodes(req, res) {
    const { nodeGroupId, unitId } = req.query;
    res.send(nodes.filter((node) => {
      if (nodeGroupId && node.nodeGroupId !== nodeGroupId) {
        return false;
      }
      if (unitId && node.unitId !== unitId) {
        return false;
      }
      return true;
    }));
  }
  // static async getNodes(req, res) {
  //   const unitNodes = nodes.filter((node) => node.nodeGroupId === req.query.nodeGroupId);
  //   res.send(unitNodes || 404);
  // }
}

export default NodeManager;
