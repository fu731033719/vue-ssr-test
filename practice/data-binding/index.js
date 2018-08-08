import Vue from 'vue'
new Vue({
  el: '#root',
  data: {
    isActive: false,
    arr: [1, 2, 3]
  },
  template: `<div>{{isActive ? '1' : '2'}}</div>`
})
