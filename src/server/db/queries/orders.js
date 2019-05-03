const knex = require('../connection');
const Promise = require('bluebird');
const get = require('lodash.get');

function getAllOrders() {
  return knex('orders')
    .select('*')
    .orderBy('payTime', 'desc')
    .orderBy('id', 'desc');
}

async function getSingleOrder(id) {
  const trx = Promise.promisifyAll(knex);

  const orders = await trx('orders')
    .select('*')
    .where({ orderId: id });

  const result = await Promise.map(orders, async (order) => {
    const items = await Promise.map(
      get(order, 'productsIds', []),
      async (itemId) => {
        return await trx('products')
          .select('*')
          .where({ itemId })
          .then((row) => {
            return row[0];
          });
      }
    );

    return {
      ...order,
      items
    };
  });

  return result;
}

module.exports = {
  getAllOrders,
  getSingleOrder
};
