import Vue from 'vue'

const component = {
  name: 'comp',
  // template: `
  // <div :style="style">
  //   <slot></slot>
  // </div>
  // `,
  render (h) {
    return h('div', {
      style: this.style
    }, this.$slots.default)
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  el: '#root',
  data () {
    return {
      value: 123
    }
  },
  components: {
    CompOne: component
  },
  mounted () {
    console.log(this.$refs)
  },
  // template: `
  // <comp-one ref="comp">
  //   <span ref="span">{{value}}</span>
  // </comp-one>
  // `,
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        prop1: this.value
      }
    },
    [
      createElement('span', {
        ref: 'span'
      }, this.value)
    ]
    )
  }
})
