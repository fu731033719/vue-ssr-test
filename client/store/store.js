import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getter'
export default () => {
  return new Vuex.Store({
    // state: {
    //   count: 0
    // },
    state: defaultState,
    mutations,
    getters
    // mutations: {
    //   updateCount (state, num) {
    //     state.count = num
    //   }
    // }
  })
}
