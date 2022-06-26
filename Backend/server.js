const koa = require ('Koa');
//const connectdb = require ("./dal/index.js");

const bodyParser = require('koa-bodyparser');
const CustomerRoutes = require('./routes/customer.routes');
const LoginRoutes = require('./routes/login.routes');
const TraderRoutes = require('./routes/trader.routes');

const app = new koa();

// app.use(async ctx => {
//     //ctx.body = "hello node";
//     connectdb;
// });

app.use(bodyParser());

app.use(CustomerRoutes.routes()).use(CustomerRoutes.allowedMethods());
app.use(LoginRoutes.routes()).use(LoginRoutes.allowedMethods());
app.use(TraderRoutes.routes()).use(TraderRoutes.allowedMethods());

app.listen(3000);

console.log("App is running on 3000");