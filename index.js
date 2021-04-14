const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const router = require('./routes/index');   // 获得路由系统
const static = require('koa-static')
const path = require('path')

app.use(router())
app.use((bodyparser()))
app.use(static(path.resolve(__dirname, 'static')))

app.listen(3333)
console.log('[demo] start-quick is starting at port 3300')
