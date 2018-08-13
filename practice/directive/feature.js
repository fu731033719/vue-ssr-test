import Vue from 'vue'
const ChildComponent = {
  template: `
  <div>{{data.value}}</div>
  `,
  inject: ['grandfather', 'data'],
  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.grandfather, this.value)
  }
}

const component = {
  // template: `
  // <div :style="style">
  //   <div name="header">
  //     <slot name="header"></slot>
  //   </div>
  //   <div name="body">
  //     <slot name="body"></slot>
  //   </div>
  // </div>
  // `,
  name: 'comp',
  components: {
    ChildComponent: ChildComponent
  },
  template: `
  <div :style="style">
    <slot value="456" :value1="value1"></slot>
    <child-component></child-component>
  </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value1: '组件内value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      grandfather: this,
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: '组件外value'
    }
  },
  mounted () {
    console.log(this.$refs, this.$refs.span)
  },
  // template: `
  // <comp-one>
  //   <span slot="header">this is header</span>
  //   <span slot="body">this is body</span>
  // </comp-one>
  // `
  template: `
  <div>
    <comp-one>
      <span slot-scope="props" ref="span">{{props.value}} {{props.value1}} {{value}}</span>
    </comp-one>
    <input type="text" v-model="value"/>
  </div>
  `
})
