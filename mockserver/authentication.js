import jwt from 'jsonwebtoken';
import config from './config.js';
import users from './userdata.js';

export const buildJwtById = (userId) => {
  const payload = users[userId];
  return jwt.sign(payload, config.secret, {
    algorithm: 'HS256',
    expiresIn: '1y',
  });
};

export const buildJwtByRole = (role) => {
  const payload = users.find((user) => user.role === role);
  return jwt.sign(payload, config.secret, {
    algorithm: 'HS256',
    expiresIn: '1y',
  });
};
