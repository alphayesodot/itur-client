import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class questionnaireService {
  static async getQuestionnaireByNodeId(id) {
    const { data } = await axios.get(`${config.apiUri}/api/questionnaire-schema?nodeId=${id}`, { headers });
    return data;
  }
}

export default questionnaireService;
