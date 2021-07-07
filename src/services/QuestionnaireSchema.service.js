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

export class QuestionnaireSchemaService {
  static async getQuestionnaires(nodeId) {
    const { data } = await axios.get(`${config.apiUri}/api/questionnaire-schema/${nodeId}`, { headers });
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

  static async update(questionnaireSchema) {
    const { data } = await axios.put(`${config.apiUri}/api/questionnaire-schema/${questionnaireSchema.id}`, questionnaireSchema, { headers });
    return data;
  }
}
