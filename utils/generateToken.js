const jwt = require('jsonwebtoken');

exports.generateToken = user => {
  const payload = {
    subject: user.id,
    department: user.name
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, 'very secret key from .env file', options);
};

exports.generateRefreshToken = user => {
  const payload = {
    subject: user.id,
    department: user.name
  };

  return jwt.sign(payload, 'very secret key from .env file');
};
