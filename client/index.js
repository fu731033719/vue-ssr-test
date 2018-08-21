import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'
Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()
store.registerModule('c', {
  state: {
    text: 3
  }
})
// store.unregisterModule('c') 模块解绑
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })监听值变化回调

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// }) 监听某个mutation被调用以及传入值

// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// }) 监听某个action被调用以及传入值
// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked')
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
