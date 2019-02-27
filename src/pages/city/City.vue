<template>
    <div>
        <!-- 城市信息页面头部 城市管理部分 -->
         <city-header></city-header>
         <!-- 城市信息页面 搜索框组件 -->
         <city-search></city-search>
    </div>
</template>

<script>
// 引入 CityHeader 组件 (头部组件)
import CityHeader from './components/Header.vue'
// 引入 CitySearch 组件（搜索框组件）
import CitySearch from './components/Search.vue'
    export default {
        components:{
            CityHeader,
            CitySearch,
        }
    }
</script>

<style scoped>

</style>