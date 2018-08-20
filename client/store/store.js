import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getter'
export default () => {
  return new Vuex.Store({
    // state: {
    //   count: 0
    // },
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        state: {
          text: 1
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
    // mutations: {
    //   updateCount (state, num) {
    //     state.count = num
    //   }
    // }
  })
}
