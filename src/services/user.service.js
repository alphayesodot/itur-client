import axios from 'axios';
import config from '../appConf';

class UserService {
  static async getUsersByUnitId(unitId) {
    const res = await axios.get(`${await config.uri.api}/api/user/${unitId}`).catch(() => {});
    return res?.data;
  }
}

export default UserService;
