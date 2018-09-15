import model from '../../model/client.model'

const handleError = (err) => {
  console.log(err)
}

export default {
  updateCountSync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.count)
    }, data.time)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  }
}
