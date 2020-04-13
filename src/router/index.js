import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import HomeExperience from '@/components/homeexperience/HomeExperience'
import HomeInfor from '@/components/homeinfor/HomeInfor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,

    }, {
      path: '/homeInfor',
      name: 'HomeInfor',
      component: HomeInfor
    },
    {
      path: '/homeExperience',
      name: 'HomeExperience',
      component: HomeExperience
    }
  ]
})
