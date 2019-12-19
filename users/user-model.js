const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
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

async function add(user) {
  const [id] = await db('users').insert(user).returning('id');

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}