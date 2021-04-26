import axios from 'axios';
import config from '../appConf';

class UnitService {
  static async getUnits() {
    const res = await axios({
      method: 'GET',
      url: `${await config.uri.api}/api/unit`,
    }).catch(() => {});
    return res?.data;
  }
}

export default UnitService;
