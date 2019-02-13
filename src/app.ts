import Koa from "koa";

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa2!</h1>';
});

app.listen(80);
console.log('app started at port 80...');