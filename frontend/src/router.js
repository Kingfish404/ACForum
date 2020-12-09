import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import SignUp from './components/SignUp.vue'
import Container from './components/container.vue'
import Content from './components/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/container'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/container',
      name: 'Container',
      component: Container
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
  ]
})