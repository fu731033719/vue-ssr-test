const Router = require('koa-router')

const apiRouter = new Router({ prefix: '/api' })

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}

apiRouter.get('/Todo', async (ctx) => {
  const todos = await ctx.db.getAlltodos()
  ctx.body = successResponse(todos)
})
module.exports = apiRouter
