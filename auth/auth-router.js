const router = require('express').Router();
const { getUser, postUser } = require('./auth-model');
const {
  generateToken,
  generateRefreshToken
} = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const tokenList = [];

router.post('/register', async (req, res) => {
  let { username, password } = req.body;

  try {
    let exists = await getUser(username);
    if (exists) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = bcrypt.hashSync(password, 14);
    let newUser = {
      username,
      password: hashedPassword
    };

    let user = await postUser(newUser);
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    tokenList.push(refreshToken);

    res.status(201).json({ token, refreshToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  try {
    let user = await getUser(username);
    if (!user) return res.status(400).json({ error: "User doesn't exist" });

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      const refreshToken = generateRefreshToken(user);
      tokenList.push(refreshToken);
      return res.status(200).json({ token, refreshToken });
    }
    return res.status(401).json({ message: 'Invalid Credentials' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post('/token', async (req, res) => {
  const { refreshToken } = req.body;
  if (refreshToken === null)
    return res.status(401).json({ error: 'No Refresh Token Sent' });
  if (!tokenList.includes(refreshToken))
    return res.status(403).json({ error: 'Refresh Token Invalid' });

  jwt.verify(refreshToken, 'very secret key from .env file', (err, user) => {
    if (err) return res.status(401).json('Your token is invalid');
    const token = generateToken(user);
    res.json({ token });
  });
});

module.exports = router;
