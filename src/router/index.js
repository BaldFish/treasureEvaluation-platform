import Vue from 'vue'
import Router from 'vue-router'
import myHome from '@/components/home/home'
import myLogin from '@/components/login/login'
import myDetailsPage from '@/components/detailsPage/detailsPage'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/detailsPage"
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
      path:'/detailsPage',
      name:'detailsPage',
      component:myDetailsPage
    },
  ]
})

