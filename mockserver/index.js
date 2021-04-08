/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import buildJwt from './authentication.js';
import config from './config.js';
import eventRouter from './event/event.router.js';

const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());

// Auth server
app.get('/auth/login/:userId', (req, res) => {
  const accessToken = buildJwt(req.params.userId);
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  res.cookie(config.jwtTokenName, accessToken, { expires: nextYear });
  res.redirect(config.clientHost);
});

// Config server
app.get('/config', (req, res) => {
  res.send({
    uri: {
      auth: `http://localhost:${config.port}`,
      api: `http://localhost:${config.port}`,
    },
    token_name: config.jwtTokenName,
  });
});

app.get('/currentUser', (req, res) => {
  const cookie = req.headers.authorization.split(' ')[1];
  if (jwt.verify(cookie, config.secret)) {
    res.send(jwt.decode(cookie).user);
  } else {
    res.status(500).send({
      message: 'Unverified user',
    });
  }
});

app.use('/api/event', eventRouter);

app.listen(config.port, () => console.log(`Mock server listening on ${config.port}`));
