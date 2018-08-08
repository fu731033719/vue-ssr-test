import Vue from 'vue'
new Vue({
  el: '#root',
  data: {
    firstName: 'Dany',
    lastName: 'lemon',
    number: 0,
    obj: {
      a: 1
    }
  },
  template: `<div>
  <p>Name: {{name}}</p>
  <p>Name: {{getName()}}</p>
  <p>Name: {{number}}</p>
  <p><input type="text" v-model="number"></p>
  <p><input type="text" v-model="firstName"></p>
  <p><input type="text" v-model="lastName"></p>
  <p><input type="text" v-model="obj.a"></p>
  </div>`,
  computed: {
    name () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    firstName (newName, oldName) {
      console.log(newName)
      console.log(oldName)
    },
    obj: {
      handler () {
        console.log('obj listen obj.a changed')
      },
      immediate: true,
      deep: true
      // 当deep为false时候无法深层的监听obj对象内层的数据变化
    },
    'obj.a': {
      handler () {
        console.log('obj.a listen obj.a changed')
      },
      immediate: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
