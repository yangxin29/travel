import Vue from 'vue'
import Router from 'vue-router'
// 引入首页组件
import Home from '@/pages/home/Home.vue'
// 引入城市信息页面组件
import City from '@/pages/city/City.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home,
    },
    // 城市页面信息路由
    {
      path: '/city',
      name:'City',
      component:City,
    }
  ]
})
