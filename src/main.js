// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick 解决移动端click事件300毫秒延时问题
import fastClick from 'fastclick'
// 引入vue-awesome-swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//  引入Vuex 文件
import store from './store/index.js'



// 引入清除默认样式的css文件 reset.css
import 'styles/reset.css'
// 解决一像素边框的问题
import 'styles/border.css'
// 引入iconfont.css
import 'styles/iconfont.css'
// 引入vue-awesome-swiper 插件的样式
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
// 将fastclick 绑定到body上
fastClick.attach(document.body)
// 注册 vue-awesome-swiper 插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
