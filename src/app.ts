import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import monk from "monk";

const app = new Koa();
const router = new Router();
const db = monk("localhost:27017/runoob");
const table = db.get("site");

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

router.get('/data', async (ctx) => {
  ctx.response.body = await table.find();
});

router.post('/signin', async (ctx) => {
  const username = ctx.request.body.name || '';
  const password = ctx.request.body.password || '';
  console.log(`signin with name: ${username}, password: ${password}`);
  if (username === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${username}!</h1>`;
    table.insert({ username, password, createDate: new Date() });
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
  }
});

app.use(router.routes());

app.listen(80);
console.log('app started at port 80...');




