import express from 'express';
import UploadManager from './upload.manager.js';

const uploadRouter = express.Router();

uploadRouter.post('/', UploadManager.upload);

export default uploadRouter;
