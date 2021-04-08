import axios from 'axios';
import config from '../appConf';

const headers = {
  Accept: 'application/json',
};

class ConfigService {
  static async setConfigVariables() {
    // TODO: Change to /config
    const { data } = await axios.get(config.configServerUri, { ...headers });
    config.uri = { ...data.uri };
    config.token_name = data.token_name;
  }
}

export default ConfigService;