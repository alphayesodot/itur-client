import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class MalshabService {
  static async getMalshabById(id) {
    const { data } = await axios.get(`${config.apiUri}/api/malshab/${id}`, { headers });
    return data;
  }
  static async getAttachmentByKey(malshabId, fileKey) {
    const { data } = await axios.request({
      method: 'GET',
      url: `${config.apiUri}/api/malshab/${malshabId}/attachment/${fileKey}`,
      responseType: 'blob',
      reponseEncoding: 'binary',
    });
    return data;
  }
}

export default MalshabService;
