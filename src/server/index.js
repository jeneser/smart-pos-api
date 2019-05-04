const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');
const cors = require('@koa/cors');

const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');
const productRoutes = require('./routes/products');
const giftsRoutes = require('./routes/gifts');
const ordersRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const store = require('./session');

const app = new Koa();
const PORT = process.env.PORT || 1337;

// cors
app.use(
  cors({
    origin: 'http://localhost:3000, http://www.pos.jeneser.wang',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowHeaders: ['X-PINGOTHER', 'Content-Type', 'Authorization', 'Accept'],
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 86400,
    credentials: true
  })
);

// sessions
app.keys = ['super-secret-key'];
app.use(session({ store }, app));

// body parser
app.use(bodyParser());

// authentication
require('./auth');
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());
app.use(productRoutes.routes());
app.use(giftsRoutes.routes());
app.use(ordersRoutes.routes());
app.use(authRoutes.routes());

// server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
