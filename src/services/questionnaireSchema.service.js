import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const QuestionType = {
  multipleChoice: 'MULTIPLE_CHOICE',
  open: 'OPEN',
  checkbox: 'CHECKBOX',
  linearScale: 'LINEAR_SCALE',
  date: 'DATE',
};

class QuestionnaireSchemaService {
  static async getQuestionnaires(nodeId) {
    const { data } = nodeId
      ? await axios.get(`${config.apiUri}/api/questionnaire-schema/${nodeId}`, { headers })
      : await axios.get(`${config.apiUri}/api/questionnaire-schema`, { headers });
    return data;
  }

  static async deleteQuestionnaireById(id) {
    const { data } = await axios.delete(`${config.apiUri}/api/questionnaire-schema/${id}`, { headers });
    return data;
  }

  static async create(questionnaireSchema) {
    const { data } = await axios.post(`${config.apiUri}/api/questionnaire-schema`, questionnaireSchema, { headers });
    return data;
  }

  static async update(questionnaireSchema, nodeToAdd, nodeToRemove) {
    const updateReq = {
      name: questionnaireSchema.name,
      targetType: questionnaireSchema.targetType,
      questions: questionnaireSchema.questions,
    };
    nodeToAdd.forEach(async (nodeId) => {
      await axios.post(`${config.apiUri}/api/questionnaire-schema/${questionnaireSchema.id}/node/${nodeId}`, updateReq, { headers });
    });
    nodeToRemove.forEach(async (nodeId) => {
      await axios.delete(`${config.apiUri}/api/questionnaire-schema/${questionnaireSchema.id}/node/${nodeId}`, updateReq, { headers });
    });
    const { data } = await axios.put(`${config.apiUri}/api/questionnaire-schema/${questionnaireSchema.id}`, updateReq, { headers });
    return data;
  }
}

export default QuestionnaireSchemaService;
