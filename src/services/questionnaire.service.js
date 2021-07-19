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

  static async createQuestionnaireInstance(questionnaireInstanceObj) {
    const { data } = await axios.post(`${config.apiUri}/api/questionnaire-instance`, questionnaireInstanceObj, { headers });
    return data;
  }
}

export default questionnaireService;
