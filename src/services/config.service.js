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
    config.tokenName = data.tokenName;
    config.secret = data.secret;
    config.fileUpload = data.fileUpload;
    config.sitesPostfixes = data.sitesPostfixes;
    console.log(config.sitesPostfixes);
    config.allowedUrlPostfixesOfRole = data.allowedUrlPostfixesOfRole;
  }
}

export default ConfigService;
