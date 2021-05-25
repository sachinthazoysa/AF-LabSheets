//import Koa
const Koa = require('koa'),
    serve = require('koa-static')

//import the router created in home.router.js
const router = require('./routes/home.router');

//import the router created in post.router.js
const router2 = require('./routes/post.routes');

const bodyParser = require('koa-bodyparser');


//creating the Koa application
const app = new Koa();

//registering the body parser
app.use(bodyParser());

app.use(router.routes())
    .use(router.allowedMethods());


app.use(serve('public/'))

app.use(router2.routes())
    .use(router2.allowedMethods());

//passing a handler application to Koa application
app.use( context => {
    context.body = 'Hello World initial call';
});


//call the application
app.listen(3000, err => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Application is running on port 3000');
});

