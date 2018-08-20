export default {
  updateCountSync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.count)
    }, data.time)
  }
}
