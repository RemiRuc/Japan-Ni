import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/views/Start'
import Travel from '@/views/Travel'
import City from '@/views/City'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel
    },
    {
      path: '/travel/:city',
      name: 'City',
      component: City
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
