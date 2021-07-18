import schemas from './db.js';

class QuestionnaireSchemaManager {
  static getSchemaById(req, res) {
    res.send(schemas.find((schema) => schema.id === req.params.id));
  }

  static getSchemaByNodeId(req, res) {
    res.send(schemas.find((schema) => schema.nodes.includes(req.query.nodeId)));
  }
}

export default QuestionnaireSchemaManager;
