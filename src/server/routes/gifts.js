const Router = require('koa-router');
const queries = require('../db/queries/gifts');

const router = new Router();
const BASE_URL = `/api/v1/gifts`;

router.get(BASE_URL, async (ctx) => {
  try {
    const gifts = await queries.getAllGifts();
    ctx.body = {
      status: 'success',
      data: gifts
    };
  } catch (err) {
    console.log(err);
  }
});

router.get(`${BASE_URL}/:itemId`, async (ctx) => {
  try {
    const gift = await queries.getSingleGift(ctx.params.itemId);

    if (gift.length) {
      ctx.body = {
        status: 'success',
        data: gift
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That gift does not exist.'
      };
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
