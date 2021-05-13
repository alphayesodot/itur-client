import axios from 'axios';
import config from '../appConf';

class AttachmentService {
  static async getMalshabAttachment(identityNumber, fileKey) {
    console.log(config);
    const res = await axios({
      method: 'GET',
      responseType: 'blob',
      url: `${await config.uri.api}/api/malshab/${identityNumber}/attachment/${fileKey}`,
    });
    return res?.data;
  }
}

export default AttachmentService;
