import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class MalshabService {
  static async getMalshabById(id) {
    const { data } = await axios.get(`${config.uri.api}/api/malshab/${id}`, { headers });
    return data;
  }
}

export default MalshabService;
