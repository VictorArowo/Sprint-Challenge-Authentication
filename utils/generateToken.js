const jwt = require('jsonwebtoken');

const generateToken = user => {
  const payload = {
    subject: user.id,
    department: user.name
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, 'very secret key from .env file', options);
};

module.exports = generateToken;
