import {
  Application,
  send,
} from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use(async (ctx,next) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/dist`,
    index: 'index.html'
  });
  next();
});

console.log('App is listening to http://localhost:8000');
await app.listen({port: 8000});
