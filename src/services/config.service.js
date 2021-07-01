import axios from 'axios';
import config from '../appConf';

const headers = {
  Accept: 'application/json',
};

class ConfigService {
  static async setConfigVariables() {
    // TODO: Change to /config
    const { data } = await axios.get(config.configServerUri, { ...headers });
    config.apiUri = data.apiUri;
    config.tokenName = data.tokenName;
    config.secret = data.secret;
    config.fileUpload = data.fileUpload;
  }
}

export default ConfigService;
