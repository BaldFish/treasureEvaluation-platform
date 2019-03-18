import Vue from 'vue'
import Router from 'vue-router'
import myHome from '@/components/home/home'
import myLogin from '@/components/login/login'
import myDetailsPage from '@/components/detailsPage/detailsPage'
import myBetterScroll from '@/components/betterScroll/betterScroll'
import myYoScroll from '@/components/yoScroll/yoScroll'
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
    {
      path:'/betterScroll',
      name:'betterScroll',
      component:myBetterScroll
    },
    {
      path:'/yoScroll',
      name:'yoScroll',
      component:myYoScroll
    }
  ]
})

