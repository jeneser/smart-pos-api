const Router = require('koa-router');
const queries = require('../db/queries/orders');

const router = new Router();
const BASE_URL = `/api/v1/orders`;

router.get(BASE_URL, async (ctx) => {
  try {
    const orders = await queries.getAllOrders();
    ctx.body = {
      status: 'success',
      data: orders
    };
  } catch (err) {
    console.log(err);
  }
});

router.get(`${BASE_URL}/:itemId`, async (ctx) => {
  try {
    const order = await queries.getSingleOrder(ctx.params.itemId);

    if (order.length) {
      ctx.body = {
        status: 'success',
        data: order
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That order does not exist.'
      };
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
