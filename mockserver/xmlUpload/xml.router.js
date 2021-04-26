import express from 'express';

const xmlRouter = express.Router();

// xml server
xmlRouter.post('/', (_req, res) => {
  res.send({ code: 'success' });
});

export default xmlRouter;
