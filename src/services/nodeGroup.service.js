import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class NodeGroupService {
  static async getNodesGroups() {
    const { data } = await axios.get(`${config.uri.api}/api/nodeGroup`, { headers });
    return data;
  }
}

export default NodeGroupService;
