import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    text: 'aaa'
  },
  // template: `<div>{{text}}</div>`,
  render (h) {
    // throw new TypeError('render error')
    console.log('render function invoked')
    return h('div', {}, this.text)
  },
  // 只捕获本组件错误不可生产环境使用
  renderError (h, err) {
    console.log('render function invoked')
    return h('div', {}, err.stack)
  },
  // 会向上冒泡捕获所有组件报错，且可生产环境使用
  errorCaptured () {

  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  }
})
