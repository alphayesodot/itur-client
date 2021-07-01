import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class NodeService {
  static async getNodes(params) {
    const { data } = await axios.get(`${config.apiUri}/api/node`, { headers, params });
    return data;
  }
  static async getNodeById(id) {
    const { data } = await axios.get(`${config.apiUri}/api/node/${id}`, { headers });
    return data;
  }
}

export default NodeService;
