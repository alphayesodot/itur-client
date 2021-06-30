import axios from 'axios';
import config from '../appConf';
import NodeService from './node.service';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class NodeGroupService {
  static async getNodeGroups() {
    const { data } = await axios.get(`${config.uri.api}/api/nodeGroup`, { headers });
    return data;
  }
  static async createNodeGroup(nodeGroupName) {
    const { data } = await axios.post(`${config.uri.api}/api/nodeGroup`, { name: nodeGroupName }, { headers });
    return data;
  }
  static async updateNodeGroup(id, nodeGroupObject) {
    if (!nodeGroupObject || typeof (nodeGroupObject) !== 'object') return;
    const { data } = await axios.put(`${config.uri.api}/api/nodeGroup/${id}`, nodeGroupObject, { headers });
    return data;
  }
  static async deleteNodeGroup(id) {
    const { data } = await axios.delete(`${config.uri.api}/api/nodeGroup/${id}`, { headers });
    const nodesToFree = (await NodeService.getNodes()).filter((node) => node.nodeGroupId === id);
    nodesToFree.forEach(async (node) => {
      await axios.put(`${config.uri.api}/api/node/${node.id}`, { nodeGroupId: '' }, { headers });
    });
    return data;
  }
  static async addUserToNodeGroup(nodeGroupId, userId) {
    const { data } = await axios.post(`${config.uri.api}/api/nodeGroup/${nodeGroupId}/user/${userId}`, { headers });
    return data;
  }
  static async removeUserFromNodeGroup(nodeGroupId, userId) {
    const { data } = await axios.delete(`${config.uri.api}/api/nodeGroup/${nodeGroupId}/user/${userId}`, { headers });
    return data;
  }
  static async updateNode(nodeGroupId, nodeId) {
    const { data } = await axios.put(`${config.uri.api}/api/node/${nodeId}`, { nodeGroupId }, { headers });
    return data;
  }
}

export default NodeGroupService;
