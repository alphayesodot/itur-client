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
  static async deleteQuestionnaireById(id) {
    const { data } = await axios.delete(`${config.uri.api}/api/questionnaire-schema/${id}`, { headers });
    return data;
  }
}

export default QuestionnaireService;
