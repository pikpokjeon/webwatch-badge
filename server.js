import Koa from 'koa';

const app = new Koa();

// http://localhost:3000/webwatch/generate_badge?key=1
app.use(async ctx =>
{
    ctx.body = '<img src="http://www.webwatch.or.kr/static/img/portal/contents/mark.jpg">';
});

app.listen(3000);