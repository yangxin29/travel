import Vue from 'vue'
import Router from 'vue-router'
// 引入首页组件
// import Home from '@/pages/home/Home.vue'
// 引入城市信息页面组件
// import City from '@/pages/city/City.vue'
// 引入 Detail 详情页面的组件 detail
// import Detail from '@/pages/detail/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      // 异步组件
      component:()=>import('@/pages/home/Home.vue'),
    },
    // 城市页面信息路由
    {
      path: '/city',
      name:'City',
      component:()=>import('@/pages/city/City.vue'),
    },
    // detail 详情页面
    {
      path:'/detail:id',
      name:'Detail',
      component:()=>import('@/pages/detail/Detail.vue')
    }
  ],
  // 进入新的页面让页面处于顶部（x轴为0，y轴也为0）
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
