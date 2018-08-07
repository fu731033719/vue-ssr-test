import Vue from 'vue'
const app = new Vue({
  // el: '#root',
  data: {
    text: 0,
    obj: {}
  },
  template: '<div ref="ass">{{text}} {{obj.a}}</div>',
  watch: {
    'text': (newText, preText) => {
      console.log(`${newText}:${preText}`)
    }
  }
})
app.$mount('#root')
let i = 0
console.log(app.$root)
setInterval(() => {
  i++
  app.text += 1
  app.obj.a = i
  // app.$forceUpdate()
  // app.$set(app.obj, 'a', i)
  // app.$delete(app.obj, 'a')
}, 1000)
// app.$options.render = (h) => {
//   return h('div', {}, 'render function is changed')
// }
// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$data)
// console.log(app.$el)
// console.log(app.$options)
// console.log(app.$root)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)
// app.$watch('text', (newText, preText) => {
//   console.log(`${newText}:${preText}`)
// })
// const unWatch = app.$watch('text', (newText, preText) => {
//   console.log(`${newText}:${preText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000) 外部定义watch方法需要手动注销 data内部使用则可自动注销
