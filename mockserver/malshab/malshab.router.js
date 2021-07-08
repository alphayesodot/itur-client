import express from 'express';
import MalshabManager from './malshab.manager.js';

const malshabRouter = express.Router();

malshabRouter.get('/:id', MalshabManager.getMalshabById);
malshabRouter.get('/:id/attachment/:fileKey', MalshabManager.getAttachmentByKey);
malshabRouter.post('/:id/attachment', MalshabManager.uploadAttachment);

export default malshabRouter;
