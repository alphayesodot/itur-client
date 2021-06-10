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
}

export default NodeGroupService;
