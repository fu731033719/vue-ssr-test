import axios from 'axios'
import { createError } from './util'
const request = axios.create({
  // baseURL: process.env.VUE_ENV === 'server' ? 'http://127.0.0.1:3333/' : '/'
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    }).catch(err => {
      console.log(err)
      const resp = err.response
      console.log('-------------', resp)
      if (resp.status === 401) {
        reject(createError(401, 'need auth'))
      }
    })
  })
}

export default {
  getAllTodos () {
    return handleRequest(request.get('/api/Todos'))
  },
  login (username, password) {
    return handleRequest(request.post('/user/login', {
      username,
      password
    }))
  },
  updateTodo (id, todo) {
    return handleRequest(request.put(`/api/Todo/${id}`, todo))
  },
  createTodo (todo) {
    return handleRequest(request.post('/api/Todo', todo))
  },
  deleteTodo (id) {
    return handleRequest(request.delete(`/api/Todo/${id}`))
  },
  deleteAllCompleted (ids) {
    return handleRequest(request.post(`/api/delete/completed`, { ids }))
  }
}
