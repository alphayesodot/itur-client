import axios from 'axios';
import config from '../appConf';

class AttachmentService {
  static async getMalshabAttachment(identityNumber, fileKey) {
    const res = await axios({
      method: 'GET',
      responseType: 'blob',
      url: `http://localhost:7071/api/malshab/${identityNumber}/attachment/${fileKey}`,
    });
    return res?.data;
  }
}

export default AttachmentService;
