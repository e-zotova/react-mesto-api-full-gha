const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const getJwtToken = (id) => jwt.sign(
  { id },
  NODE_ENV === 'production' ? JWT_SECRET : 'someveryveryverysecretkey',
  { expiresIn: '7d' },
);
const verifyJwtToken = (token) => jwt.verify(token, JWT_SECRET);

console.log(process.env.NODE_ENV);

module.exports = { getJwtToken, verifyJwtToken };
