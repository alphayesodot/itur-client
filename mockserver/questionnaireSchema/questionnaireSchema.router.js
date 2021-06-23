import express from 'express';
import QuestionnaireManager from './questionnaireSchema.manager.js';

const questionnaireSchemaRouter = express.Router();

questionnaireSchemaRouter.get('/:nodeId', QuestionnaireManager.getQuestionnaires);

export default questionnaireSchemaRouter;
