const Router = require('@koa/router'),
serve = require('koa-static');

const router = new Router({
    prefix:'/home'
});

router.get('/', serve('public/',{index:'home.html'}));


router.get('/world2', context =>{
    context.body = 'Hello World from home get';
});


router.post('/world2',context =>{
    context.body ='Hello world from home post';
});


module.exports = router;
