import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class QuestionnaireService {
  static async getQuestionnaires(nodeId) {
    const { data } = await axios.get(`${config.uri.api}/api/questionnaire-schema/${nodeId}`, { headers });
    return data;
  }
}

export default QuestionnaireService;
