import Vuex from 'vuex'
import state from './state/state'
import mutations from './mutations/mutations'
export default () => {
  return new Vuex.Store({
    // state: {
    //   count: 0
    // },
    state,
    mutations
    // mutations: {
    //   updateCount (state, num) {
    //     state.count = num
    //   }
    // }
  })
}
