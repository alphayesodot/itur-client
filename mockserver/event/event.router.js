import express from 'express';
import EventManager from './event.manager.js';

const eventRouter = express.Router();

eventRouter.get('/', EventManager.getEvents);
eventRouter.get('/:id', EventManager.getEventById);
eventRouter.post('/:eventId/user/:interviewerId', EventManager.addInterviewer);
eventRouter.delete('/:eventId/user/:interviewerId', EventManager.removeInterviewer);

export default eventRouter;
