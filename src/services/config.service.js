import axios from 'axios';
import config from '../appConf';

const headers = {
  Accept: 'application/json',
};

class ConfigService {
  static async setConfigVariables() {
    const { data } = await axios.get('/config', { ...headers });
    config.uri = { ...data.uri };
    config.token_name = data.token_name;
    config.secret = data.secret;
  }
}

export default ConfigService;
