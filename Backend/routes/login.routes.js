const Router = require("@koa/router");

const {setLogin, getAllLogins, getLogin} = require('../api/login.api');

const router = new Router({
    prefix: '/login'
})

router.post('/', async ctx =>{
    let login = ctx.request.body;

    login = await setLogin(login);

    ctx.response.status = 200;
    ctx.body = login;
})

router.get('/', async ctx => {
    ctx.body = await getAllLogins();
})

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getLogin(id);
})

module.exports = router;