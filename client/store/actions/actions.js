import model from '../../model/client.model'
import notify from '../../components/notification/function'
import bus from '../../util/bus'
const handleError = (err) => {
  console.log(err)
  if (err.code === 401) {
    notify({
      content: '请先登录'
    })
    bus.$emit('auth')
  }
  if (err.code === 400) {
    notify({
      content: '用户名密码错误'
    })
  }
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
  },
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: '登陆成功'
          })
          resolve()
        })
        .catch(err => {
          console.log(err)
          handleError(err)
          reject(err)
        })
    })
  }
}
