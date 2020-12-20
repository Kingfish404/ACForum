import Vue from 'vue'
import Router from 'vue-router'
import Container from './components/container.vue'
import Content from './components/content.vue'
import sendmsg from './components/sendMsg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/container'
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
    {
      path: '/sendMsg',
      name: 'SendMsg',
      component: sendmsg
    }
  ]
})