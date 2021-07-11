import axios from 'axios';
import config from '../appConf';

const headers = {
  Accept: 'application/json',
};

class ConfigService {
  static async setConfigVariables() {
    // TODO: Comment on push
    const { data } = await axios.get('http://localhost:8080/config', { ...headers });
    // const { data } = await axios.get('/config', { ...headers });
    config.apiUri = data.apiUri;
    config.tokenName = data.tokenName;
    config.fileUpload = data.fileUpload;
    config.attachments = data.attachments;
  }
}

export default ConfigService;
