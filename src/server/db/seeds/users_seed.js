const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users')
    .del()
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('jeneser', salt);
      return Promise.join(
        knex('users').insert({
          username: 'jeneser',
          password: hash,
          admin: true
        })
      );
    })
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('lanyue', salt);
      return Promise.join(
        knex('users').insert({
          username: 'lanyue',
          password: hash,
          admin: false
        })
      );
    });
};
