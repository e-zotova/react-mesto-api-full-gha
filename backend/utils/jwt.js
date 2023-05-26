const jsonwebtoken = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
const devsecret = 'someveryveryverysecretkey';

const jwt = NODE_ENV === 'production' ? JWT_SECRET : devsecret;

const getJwtToken = (id) => jsonwebtoken.sign({ id }, jwt, { expiresIn: '7d' });
const verifyJwtToken = (token) => jwt.verify(token, jwt);

module.exports = { getJwtToken, verifyJwtToken };
