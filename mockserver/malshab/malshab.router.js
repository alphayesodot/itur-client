import express from 'express';
import MalshabManager from './malshab.manager.js';

const malshabRouter = express.Router();

malshabRouter.get('/:id', MalshabManager.getMalshabById);

export default malshabRouter;
