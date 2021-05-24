import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class UserService {
  static async getUserById(id) {
    const { data } = await axios.get(`${config.uri.api}/api/user/${id}`, { headers });
    return data;
  }
  static async getUsersByUnitId(unitId) {
    const res = await axios.get(`${await config.uri.api}/api/user/${unitId}`).catch(() => {});
    return res?.data;
  }

  static async createUser(unitId, role, userName) {
    const res = await axios.post(`${await config.uri.api}/api/user/`, { unitId, role, userName }).catch(() => {});
    return res?.data;
  }
}

export default UserService;
