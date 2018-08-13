import Vue from 'vue'

const component = {
  template: `<div>
    <input v-model="text">
    <span @click="handleChange">{{propOne}}</span>
    <span v-if="active">12312312</span>
  </div>`,
  props: {
    active: {
      type: Boolean,
      // required: true
      default: true
    },
    propOne: Number,
    onChange: Function,
    obj: {
      type: Object,
      default () {
        return {
          text: 123
        }
      }
    }
  },
  data () {
    return {
      text: 123
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}
const CompVue = Vue.extend(component)

new CompVue({
  el: '#root',
  propsData: {
    propOne: 6666
  }
})

// new Vue({
//   el: '#root',
//   data: {
//     text: 0,
//     propone: 1
//   },
//   components: {
//     CompOne: component
//   },
//   template: `
//   <div>
//     <comp-one :active="true" :prop-one="propone" @change='handleChange'></comp-one>
//     <comp-one :active="false" :prop-one="2"></comp-one>
//   </div>
//   `,
//   methods: {
//     handleChange () {
//       this.propone += 1
//     }
//   }
// })
