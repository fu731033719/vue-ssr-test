const Router = require('koa-router')

const apiRouter = new Router({ prefix: '/api' })

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}

apiRouter
  .get('/Todos', async (ctx) => {
    const todos = await ctx.db.getAlltodos()
    ctx.body = successResponse(todos)
  })
  .post('/Todo', async (ctx) => {
    const data = await ctx.db.addTodo(ctx.request.body)
    ctx.body = successResponse(data)
  })
  .put('/Todo/:id', async (ctx) => {
    const data = await ctx.db.updateTodo(ctx.params.id, ctx.request.body)
    ctx.body = successResponse(data)
  })
  .delete('/Todo/:id', async (ctx) => {
    const data = await ctx.db.deleteTodo(ctx.params.id)
    ctx.body = successResponse(data)
  })
  .post('/delete/completed', async (ctx) => {
    const data = await ctx.db.deleteCompleted(ctx.request.body.ids)
    ctx.body = successResponse(data)
  })

module.exports = apiRouter
