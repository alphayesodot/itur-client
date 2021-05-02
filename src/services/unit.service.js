import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class UnitService {
  static async getUnitById(id) {
    const { data } = await axios.get(`${config.uri.api}/api/unit/${id}`, { headers });
    return data;
  }
}

export default UnitService;
