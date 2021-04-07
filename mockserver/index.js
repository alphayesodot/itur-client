/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import buildJwt from './authentication.js';
import config from './config.js';
import eventRouter from './event/event.router';

const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());

// Auth server
app.get('/auth/login/:userId', (req, res) => {
  const accessToken = buildJwt(req.params.userId);
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  res.cookie('ituruser', accessToken, { expires: nextYear });
  res.redirect(config.clientHost);
});

// Config server
app.get('/config', (req, res) => {
  res.send({
    auth: {
      token_name: config.jwtTokenName,
    },
  });
});

app.use('/api/event', eventRouter);

app.listen(config.port, () => console.log(`Mock server listening on ${config.port}`));
