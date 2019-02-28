import Vue from 'vue'
import Vuex from 'vuex'

// 引入state.js 文件
import state from './state.js'
// 引入 mutations.js 文件
import mutations from './mutations.js'
Vue.use(Vuex)


export default new Vuex.Store({
    state,
    // actions:{
    //     // 两个参数 ctx：执行的上下文 ，cityName：传过来的值
    //     changeCity(ctx,cityName){
    //         ctx.commit('changeCity',cityName)
    //     }
    // },
    mutations
})