import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

const instances = []
let seed = 1
const removeInstance = (instance) => {
  if (!instance) return
  // const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)

  instance.splice(index, 1)
}
const notify = (options) => {
  if (Vue.prototype.$isServer) return
  const {
    autoClose,
    ...rest
  } = options
  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })
  const id = `notication_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  return instance.vm
}

export default notify
