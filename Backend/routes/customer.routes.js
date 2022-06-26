const Router = require("@koa/router");

const {setCustomer, getAllCustomers, getCustomer, updateCustomer, deleteCustomer} = require('../api/customer.api');

const router = new Router({
    prefix: '/customers'
})

router.post('/', async ctx =>{
    let customer = ctx.request.body;

    customer = await setCustomer(customer);

    ctx.response.status = 200;
    ctx.body = customer;
})

router.get('/', async ctx => {
    ctx.body = await getAllCustomers();
})

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getCustomer(id);
})

router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    await deleteCustomer(id);
})

router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let customer = ctx.request.body;
    customer = await updateCustomer(id,customer);
    ctx.response.status = 200;
    ctx.body = customer;
})

module.exports = router;