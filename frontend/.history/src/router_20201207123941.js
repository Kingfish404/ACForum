import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'

Vue.use(Router)

export default new Router({
   routes:[
   {
       path: '/',
       redirect: '/signup'
   },
   {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
   ]
})