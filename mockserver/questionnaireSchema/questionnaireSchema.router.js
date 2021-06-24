import express from 'express';
import QuestionnaireManager from './questionnaireSchema.manager.js';

const questionnaireSchemaRouter = express.Router();

questionnaireSchemaRouter.get('/:nodeId', QuestionnaireManager.getQuestionnaires);
questionnaireSchemaRouter.delete('/:id', QuestionnaireManager.deleteQuestionnaireById);

export default questionnaireSchemaRouter;
