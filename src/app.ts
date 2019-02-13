import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.use(bodyParser());

router.get('/', async (ctx) => {
  ctx.response.body = `
    <h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
});

router.post('/signin', async (ctx) => {
  let name = ctx.request.body.name || '';
  let password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
  }
});

app.use(router.routes());

app.listen(80);
console.log('app started at port 80...');