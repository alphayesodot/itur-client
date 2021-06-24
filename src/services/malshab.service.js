import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class MalshabService {
  static async getMalshabById(id) {
    const { data } = await axios.get(`${config.uri.api}/api/malshab/${id}`, { headers });
    return data;
  }
  static async getAttachmentByKey(malshabId, fileKey) {
    const { data } = await axios.request({
      method: 'GET',
      url: `${config.uri.api}/api/malshab/${malshabId}/attachment/${fileKey}`,
      responseType: 'blob',
      reponseEncoding: 'binary',
    });
    return data;
  }
  static async uploadAttachment(malshabId, file) {
    // TODO: Check with back-end
    const { data } = await axios.post(`${config.uri.api}/api/malshab/${malshabId}/attachment`, { file }, { headers });
    return data;
  }
}

export default MalshabService;
