const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
const devsecret = 'someveryveryverysecretkey';

const secretToken = NODE_ENV === 'production' ? JWT_SECRET : devsecret;

const getJwtToken = (id) => jwt.sign({ id }, secretToken, { expiresIn: '7d' });
const verifyJwtToken = (token) => jwt.verify(token, secretToken);

module.exports = { getJwtToken, verifyJwtToken };
