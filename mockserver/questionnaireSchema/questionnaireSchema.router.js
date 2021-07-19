import express from 'express';
import QuestionnaireManager from './questionnaireSchema.manager.js';

const questionnaireSchemaRouter = express.Router();

questionnaireSchemaRouter.get('/', QuestionnaireManager.getQuestionnaires);
questionnaireSchemaRouter.delete('/:id', QuestionnaireManager.deleteQuestionnaireById);
questionnaireSchemaRouter.post('/', QuestionnaireManager.create);
questionnaireSchemaRouter.put('/:id', QuestionnaireManager.update);

questionnaireSchemaRouter.get('/', QuestionnaireManager.getSchemaByNodeId);

export default questionnaireSchemaRouter;
