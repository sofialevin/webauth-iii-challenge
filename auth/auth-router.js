const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model.js');

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  const token = signToken(user);

  Users.add(user)
    .then(saved => {
      console.log(saved)
      res.status(201).json({
        token: token,
        message: `Welcome ${user.username}!`,
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = signToken(user);

        res.status(200).json({
          token: token,
          message: `Welcome back ${user.username}!`,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    });
});

function signToken(user) {
  const payload = {
    username: user.username,
  };

  const secret = process.env.JWT_SECRET || "shhhhh, secret!";

  const options = {
    expiresIn: "24h"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;