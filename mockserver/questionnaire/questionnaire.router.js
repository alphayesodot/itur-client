import express from 'express';
import QuestionnaireManager from './questionnaire.manager';

const questionnaireRouter = express.Router();
questionnaireRouter.get('/:nodeId', QuestionnaireManager.getQuestionnaires);

export default questionnaireRouter;
