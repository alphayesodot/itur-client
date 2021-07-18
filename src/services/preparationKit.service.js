import axios from 'axios';
import config from '../appConf';

export default class PreparationKitService {
  static async getFileByName(fileName) {
    const { data } = await axios.request({
      method: 'GET',
      url: `${config.apiUri}/api/preparation-kit/${fileName}`,
      responseType: 'blob',
      reponseEncoding: 'binary',
    });
    return data;
  }
}
