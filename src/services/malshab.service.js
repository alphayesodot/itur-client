import axios from 'axios';
import config from '../appConf';

class MalshabService {
  static async getMalshabByIdentityNumber(identityNumber) {
    const { data } = await axios({
      method: 'GET',
      url: `${await config.uri.api}/api/malshab/${identityNumber}`,
    });
    return data;
  }
}

export default MalshabService;
