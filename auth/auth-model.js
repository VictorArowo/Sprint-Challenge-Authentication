const db = require('../database/dbConfig');

exports.getUser = username => {
  return db('users')
    .where('username', '=', username)
    .first();
};

exports.postUser = async user => {
  return db('users')
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
