import jwt from 'jsonwebtoken';
import config from './config.js';
import users from './userdata.js';

const getSignedJwt = (payload) => (
  jwt.sign(payload, config.secret, {
    algorithm: 'HS256',
    expiresIn: '1y',
  })
);

export const buildJwtById = (userId) => {
  const payload = users[userId];
  return getSignedJwt(payload);
};

export const buildJwtByRole = (role) => {
  const payload = users.find((user) => user.role === role);
  return getSignedJwt(payload);
};
