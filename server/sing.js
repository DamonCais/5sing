const Koa = require('koa')
const app = new Koa()
const response = require('./response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
const router = require('./routers')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => console.log(`listening on port ${config.port}`))