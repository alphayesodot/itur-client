import schemas from './db.js';

class QuestionnaireSchemaManager {
  static getSchemaById(req, res) {
    res.send(schemas.find((schema) => schema.id === req.params.id));
  }
}

export default QuestionnaireSchemaManager;
