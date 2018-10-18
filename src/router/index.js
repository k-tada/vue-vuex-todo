import Vue from 'vue'
import Router from 'vue-router'
import auth from '../store/auth'
import Login from '../components/Login'
import TodoApp from '../components/TodoApp'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/todos', component: TodoApp, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
    { path: '*', redirect: '/todos' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(({ meta }) => meta.requiresAuth) && !auth.state.user) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
