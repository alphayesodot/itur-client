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
  static async getUnits() {
    const res = await axios.get(`${await config.uri.api}/api/unit`, { headers });
    return res?.data;
  }
  static async createUnit(unitName) {
    const res = await axios.post(`${await config.uri.api}/api/unit`, { unitName }, { headers });
    return res?.data;
  }
}

export default UnitService;
