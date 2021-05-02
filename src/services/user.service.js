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
}

export default UserService;
