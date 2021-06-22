import express from 'express';
import ReportManager from './report.manager.js';

const reportRouter = express.Router();

reportRouter.post('/', ReportManager.createReport);

export default reportRouter;
