import axios from 'axios';
import dotenv from 'dotenv';
import config from '../appConf';

dotenv.config();

const headers = {
  Accept: 'application/json',
};

class ConfigService {
  static async setConfigVariables() {
    const { data } = await axios.get(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/config'
        : '/config',
      { ...headers },
    );
    config.apiUri = data.apiUri;
    config.tokenName = data.tokenName;
    config.fileUpload = data.fileUpload;
    config.attachments = data.attachments;
  }
}

export default ConfigService;
