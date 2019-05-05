const RedisStore = require('koa-redis');

module.exports = new RedisStore({
  port: 6379,
  host: process.env.LOCAL_HOST
});
