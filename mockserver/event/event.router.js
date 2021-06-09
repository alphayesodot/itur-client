import express from 'express';
import EventManager from './event.manager.js';

const eventRouter = express.Router();

eventRouter.get('/', EventManager.getEvents);
eventRouter.get('/:id', EventManager.getEventById);

export default eventRouter;
