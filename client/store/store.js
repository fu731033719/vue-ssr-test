import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getter'

const isDev = process.env.NODE_ENV === 'development'
export default () => {
  const store = new Vuex.Store({
    // state: {
    //   count: 0
    // },\
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
    // modules: {
    //   a: {
    //     namespaced: true,
    //     state: {
    //       text: 1
    //     },
    //     mutations: {
    //       updateText (state, text) {
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus (state) {
    //         return `${state.text} 1`
    //       }
    //     }
    //   },
    //   b: {
    //     state: {
    //       text: 2
    //     }
    //   }
    // }
    // mutations: {
    //   updateCount (state, num) {
    //     state.count = num
    //   }
    // }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getter'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getter').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }
  return store
}
