import questionnaires from './db.js';

class QuestionnaireManager {
  static async getQuestionnaires(req, res) {
    res.send(questionnaires);
    // didnt do the validations
  }
}

export default QuestionnaireManager;
