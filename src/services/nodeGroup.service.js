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

  static async getNodesGroupByUnit(unitId) {
    const res = await axios.get(`${await config.uri.api}/api/nodeGroup/`, { headers, params: { unitId } });
    return res?.data;
  }
}

export default NodeGroupService;
