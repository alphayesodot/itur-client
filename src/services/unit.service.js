import axios from 'axios';
import config from '../appConf';

class UnitService {
  static async getUnits() {
    const res = await axios.get(`${await config.uri.api}/api/unit`).catch(() => {});
    return res?.data;
  }
  static async createUnit(unitName) {
    const res = await axios.post(`${await config.uri.api}/api/unit`, { unitName }).catch(() => {});
    return res?.data;
  }
}

export default UnitService;
