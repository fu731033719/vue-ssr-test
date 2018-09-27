// import ToDo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // path: '/app/:id',
    // props: true,
    props: (route) => ({id: route.query.b}),
    // props存在2种使用方法，可以传入Boolean在该组件的props内直接获取/router/xxx后的xxx值 或者直接传入route对象获取内部的某值
    // component: ToDo,
    component: () => import('../views/todo/todo.vue'),
    // 通过访问后再加载component的方式可以提高页面性能
    // components: {
    //   default: ToDo,
    //   a: Login
    // },
    // 命名视图
    name: 'app',
    meta: {
      title: 'meta-titile',
      description: 'meta-description'
    },
    // 局部路由守卫
    beforeEnter: (to, from, next) => {
      console.log('局部路由守卫')
      next()
    }
    // children: [
    //   {path: 'test', component: Login}
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
    // component: Login
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
