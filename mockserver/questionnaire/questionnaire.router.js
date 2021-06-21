import express from 'express';
import QuestionnaireManager from './questionnaire.manager';

const questionnaireRouter = express.Router();
questionnaireRouter.get('/:id', QuestionnaireManager.getQuestionnaires);

export default questionnaireRouter;
