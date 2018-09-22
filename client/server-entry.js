import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    if (context.user) {
      store.state.user = context.user
    }

    // store 传入值暂时隐藏
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncDate) {
          return Component.asyncDate({
            route: router.currentRoute,
            store
          })
        }
      })).then(data => {
        context.meta = app.$meta()
        context.state = store.state
        resolve(app)
      })
    })
  })
}
