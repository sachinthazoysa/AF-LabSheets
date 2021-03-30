const Router = require('@koa/router');

const router = new Router({
    prefix:'/home'
});

router.get('/', context =>{
    context.body = 'Hello World worked';
});


router.get('/world2', context =>{
    context.body = 'Hello World 2 worked';
});


router.post('/world2',context =>{
    context.body ='Hello world';
});


module.exports = router;
