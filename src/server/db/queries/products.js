const knex = require('../connection');

function getAllProducts() {
  return knex('products').select('*');
}

function getSingleProduct(id) {
  return knex('products')
    .select('*')
    .where({ itemId: id });
}

function addProduct(movie) {
  return knex('products')
    .insert(movie)
    .returning('*');
}

function updateProduct(id, movie) {
  return knex('products')
    .update(movie)
    .where({ id: parseInt(id) })
    .returning('*');
}

function deleteProduct(id) {
  return knex('products')
    .del()
    .where({ id: parseInt(id) })
    .returning('*');
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
};
