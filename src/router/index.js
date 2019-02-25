import Vue from 'vue'
import Router from 'vue-router'
// 引入首页组件
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home,
    }
  ]
})
