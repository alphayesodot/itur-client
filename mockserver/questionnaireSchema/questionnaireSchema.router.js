import express from 'express';
import QuestionnaireSchemaManager from './questionnaireSchema.manager.js';

const questionnaireSchemaRouter = express.Router();

questionnaireSchemaRouter.get('/:id', QuestionnaireSchemaManager.getSchemaById);

questionnaireSchemaRouter.get('/', QuestionnaireSchemaManager.getSchemaByNodeId);

export default questionnaireSchemaRouter;
