const router = require('express').Router();

const Users = require('./user-model.js');

const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  const { department } = req.token;

  console.log("token", req.token)

  Users.findByDepartment(department)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json({ error: err }));
})

module.exports = router;