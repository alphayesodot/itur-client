import axios from 'axios';
import config from '../appConf';

class MalshabService {
  static async getMalshabByIdentityNumber(identityNumber) {
    const res = await axios({
      method: 'GET',
      url: `${await config.uri.api}/api/malshab/${identityNumber}`,
    }).catch(() => {});
    return res?.data;
  }
}

export default MalshabService;
