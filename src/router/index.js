import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import HomeExperience from '@/components/homeexperience/HomeExperience'
import HomeInfor from '@/components/homeinfor/HomeInfor'
import Heard from '@/components/heard/heard'
import Mainexper from '@/components/mainexper/mainexper'

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
      component: HomeExperience,
      
    },
    {
      path: '/heard',
      name: 'Heard',
      component: Heard,
    },
    {
      path: '/mainexper',
      name: 'Mainexper',
      component: Mainexper,
    }
  ]
})
