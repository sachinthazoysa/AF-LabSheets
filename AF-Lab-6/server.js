const Koa = require('koa'),
    serve = require('koa-static');
const homeRouter = require('./routes/home.router');
const postRouter = require('./routes/post.routes');
const bodyParser = require('koa-bodyparser');
require('./dal');

const app = new Koa();

app.use(bodyParser());

app.use(homeRouter.routes())
    .use(homeRouter.allowedMethods());
app.use(serve('public/'))
app.use(postRouter.routes())
    .use(postRouter.allowedMethods());

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

