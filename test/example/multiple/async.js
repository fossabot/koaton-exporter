import koa from 'koa';

async function koaStyle (ctx, next) {
    await next();
}
async function koaStyle2 (ctx) {
    await global.next();
}
const koaStyle3 = async (ctx, next) => {
        await next();
};

koa.use(ctx => {
    ctx.body = 'Hello Koa';
});
koa.use( (ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

koa.use(async (ctx, next) => {
  const start = new Date();
  await next();0
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
