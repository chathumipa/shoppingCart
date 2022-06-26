const Router = require("@koa/router");

const {setTrader, getAllTraders, getTrader, deleteTrader, updateTrader} = require('../api/trader.api');

const router = new Router({
    prefix: '/traders'
})

router.post('/', async ctx =>{
    let trader = ctx.request.body;

    trader = await setTrader(trader);

    ctx.response.status = 200;
    ctx.body = trader;
})

router.get('/', async ctx => {
    ctx.body = await getAllTraders();
})

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getTrader(id);
})

router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    await deleteTrader(id);
})

router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let trader = ctx.request.body;
    trader = await updateTrader(id,trader);
    ctx.response.status = 200;
    ctx.body = trader;
})

module.exports = router;