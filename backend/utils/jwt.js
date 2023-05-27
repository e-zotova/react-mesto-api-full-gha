const jwt = require('jsonwebtoken');
require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;
const devsecret = 'secret-key';

const secretToken = NODE_ENV === 'production' ? JWT_SECRET : devsecret;

const getJwtToken = (id) => jwt.sign({ id }, secretToken, { expiresIn: '7d' });
const verifyJwtToken = (token) => jwt.verify(token, secretToken);

module.exports = { getJwtToken, verifyJwtToken };
