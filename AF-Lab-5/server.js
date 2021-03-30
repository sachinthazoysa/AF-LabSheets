const Koa = require('koa');
const router = require('./routes/home.router');
const router2 = require('./routes/post.routes');

const bodyParser = require('koa-bodyparser');

const app = new Koa();


app.use(bodyParser());

app.use(router.routes())
    .use(router.allowedMethods());

app.use(router2.routes())
    .use(router2.allowedMethods());


app.use( context => {
    context.body = 'Hello World initial call';
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Application is running on port 3000');
});

