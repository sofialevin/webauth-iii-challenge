const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findByDepartment,
  findById,
};

function find() {
  return db('users')
    .select('id', 'username', 'department');
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .select('id', 'username', 'department', 'password')
    .first();
}

function findByDepartment(department) {
  return db('users')
    .where({department: department})
    .select('id', 'username', 'department')
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    })
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}