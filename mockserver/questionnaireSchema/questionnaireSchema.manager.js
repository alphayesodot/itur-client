import jwt from 'jsonwebtoken';
import questionnaires from './db.js';
import Role from '../user/enum.js';
import { generateId } from '../utils.js';

class QuestionnaireManager {
  static async getQuestionnaires(req, res) {
    res.send(questionnaires);
    // didnt do the validations
  }

  static async deleteQuestionnaireById(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    if ([Role.Mada].includes(requester.role)) {
      const questionnaireIdx = questionnaires.findIndex(
        (questionnaire) => questionnaire.id === req.params.id.toString(),
      );
      const deletedNodeGroup = questionnaireIdx > -1 && questionnaires[questionnaireIdx];
      if (questionnaireIdx > -1) {
        questionnaires.splice(questionnaireIdx, 1);
      }
      res.send(deletedNodeGroup);
    } else {
      res.status(400).send('BROKEN');
    }
  }

  static async create(req, res) {
    const requester = jwt.decode(req.headers.authorization.split(' ')[1]);
    const updatedAt = new Date();
    const createdAt = new Date();
    const createdBy = requester.id;
    const id = generateId();
    questionnaires.push({ ...req.body, createdBy, updatedAt, createdAt, id });
    res.send({ ...req.body, createdBy, updatedAt, createdAt, id });
  }

  static async update(req, res) {
    const updatedAt = new Date();
    const questionnaireIdx = questionnaires.findIndex((q) => q.id === req.params.id.toString());
    questionnaires[questionnaireIdx] = {
      ...questionnaires[questionnaireIdx],
      ...req.body,
      updatedAt,
    };
    res.send(questionnaires[questionnaireIdx]);
  }

  static getSchemaByNodeId(req, res) {
    res.send(schemas.find((schema) => schema.nodes.includes(req.query.nodeId)));
  }
}

export default QuestionnaireManager;
