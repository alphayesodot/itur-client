import express from 'express';
import PreparationKitManager from './preparation-kit.manager.js';

const preparationKitRouter = express.Router();

preparationKitRouter.get('/pdf', PreparationKitManager.getPDF);
preparationKitRouter.get('/video', PreparationKitManager.getVideo);

export default preparationKitRouter;
