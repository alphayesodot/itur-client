import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class NodeGroupService {
  static async getNodeGroups() {
    const { data } = await axios.get(`${config.uri.api}/api/nodeGroup`, { headers });
    return data;
  }
  static async createNodeGroup(nodeGroupName: string) {
    const { data } = await axios.post(`${config.uri.api}/api/nodeGroup`, { name: nodeGroupName }, { headers });
    return data;
  }
  static async updateNodeGroup(id, nodeGroupObject: Object) {
    if (!nodeGroupObject || typeof (nodeGroupObject) !== 'object') return;
    const { data } = await axios.put(`${config.uri.api}/api/nodeGroup/${id}`, nodeGroupObject, { headers });
    return data;
  }
  static async deleteNodeGroup(id) {
    const { data } = await axios.delete(`${config.uri.api}/api/nodeGroup/${id}`, { headers });
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
}

export default NodeGroupService;
