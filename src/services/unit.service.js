import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class UnitService {
  static async getUnitById(id) {
    const { data } = await axios.get(`${config.apiUri}/api/unit/${id}`, { headers });
    return data;
  }
  static async getUnits() {
    const res = await axios.get(`${await config.apiUri}/api/unit`, { headers });
    return res?.data;
  }
  static async getMyUnit() {
    const res = await axios.get(`${await config.apiUri}/api/user/me/unit`, { headers });
    return res?.data;
  }
  static async createUnit(unitName) {
    const res = await axios.post(`${await config.apiUri}/api/unit`, { unitName }, { headers });
    return res?.data;
  }
}

export default UnitService;
