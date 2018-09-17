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
  addTodo ({ commit }, todo) {
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: '添加事件成功！'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  updateTodo ({ commit }, {id, todo}) {
    model.updateTodo(id, todo)
      .then(data => {
        commit('updateTodo', {id, todo: data})
        notify({
          content: '更新事件成功！'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  deleteTodo ({ commit }, id) {
    model.deleteTodo(id)
      .then(data => {
        commit('deleteTodo', id)
        notify({
          content: '删除事件成功！'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  deleteAllCompleted ({ commit, state }) {
    const ids = state.todos.filters(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('deleteAllCompleted')
        notify({
          content: '清除完成事件成功！'
        })
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
