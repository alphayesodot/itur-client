import jwt from 'jsonwebtoken';
import questionnaires from './db.js';
import Role from '../user/enum.js';

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
}

export default QuestionnaireManager;
