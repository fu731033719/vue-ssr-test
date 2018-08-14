import ToDo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: ToDo
  },
  {
    path: '/login',
    component: Login
  }
]
