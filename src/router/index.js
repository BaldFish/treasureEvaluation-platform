import Vue from 'vue'
import Router from 'vue-router'
import myHome from '@/components/home/home'
import myLogin from '@/components/login/login'
import myDetails from '@/components/details/details'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path:'/home',
      name:'home',
      component:myHome
    },
    {
      path:'/login',
      name:'login',
      component:myLogin
    },
    {
      path:'/details',
      name:'details',
      component:myDetails
    }
  ]
})

