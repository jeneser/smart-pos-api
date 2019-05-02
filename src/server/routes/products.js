const Router = require('koa-router');
const queries = require('../db/queries/products');

const router = new Router();
const BASE_URL = `/api/v1/products`;

router.get(BASE_URL, async (ctx) => {
  try {
    const products = await queries.getAllProducts();
    ctx.body = {
      status: 'success',
      data: products
    };
  } catch (err) {
    console.log(err);
  }
});

router.get(`${BASE_URL}/:itemId`, async (ctx) => {
  try {
    const product = await queries.getSingleProduct(ctx.params.itemId);

    if (product.length) {
      ctx.body = {
        status: 'success',
        data: product
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That product does not exist.'
      };
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
