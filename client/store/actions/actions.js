// import model from '../../model/client.model'
import model from 'model'
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
    commit('startLoading')
    return model.getAllTodos()
      .then(data => {
        commit('endLoading')
        commit('fillTodos', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  addTodo ({ commit }, todo) {
    commit('startLoading')
    model.createTodo(todo)
      .then(data => {
        commit('endLoading')
        commit('addTodo', data)
        notify({
          content: '添加事件成功！'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  updateTodo ({ commit }, {id, todo}) {
    commit('startLoading')
    model.updateTodo(id, todo)
      .then(data => {
        commit('endLoading')
        commit('updateTodo', {id, todo: data})
        notify({
          content: '更新事件成功！'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteTodo ({ commit }, id) {
    commit('startLoading')
    model.deleteTodo(id)
      .then(data => {
        commit('endLoading')
        commit('deleteTodo', id)
        notify({
          content: '删除事件成功！'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteAllCompleted ({ commit, state }) {
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    commit('startLoading')
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('endLoading')
        commit('deleteAllCompleted')
        notify({
          content: '清除完成事件成功！'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  login ({ commit }, { username, password }) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('endLoading')
          commit('doLogin', data)
          notify({
            content: '登陆成功'
          })
          resolve()
        })
        .catch(err => {
          commit('endLoading')
          console.log(err)
          handleError(err)
          reject(err)
        })
    })
  }
}
