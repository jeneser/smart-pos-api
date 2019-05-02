const knex = require('../connection');

function getAllGifts() {
  return knex('gifts').select('*');
}

function getSingleGift(id) {
  return knex('gifts')
    .select('*')
    .where({ itemId: id });
}

module.exports = {
  getAllGifts,
  getSingleGift
};
