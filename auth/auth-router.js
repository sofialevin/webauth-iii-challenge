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