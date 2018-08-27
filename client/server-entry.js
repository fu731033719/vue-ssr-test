import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    // store 传入值暂时隐藏
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      resolve(app)
    })
  })
}
