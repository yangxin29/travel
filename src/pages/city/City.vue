<template>
    <div>
        <!-- 城市信息页面头部 城市管理部分 -->
         <city-header></city-header>
         <!-- 城市信息页面 搜索框组件 -->
         <city-search></city-search>
         <!-- 城市信息 城市列表页面组件 -->
         <city-list></city-list>
         <!-- 城市信息 城市字母表 -->
         <city-alphabet></city-alphabet>
    </div>
</template>

<script>
// 引入 CityHeader 组件 (头部组件)
import CityHeader from './components/Header.vue'
// 引入 CitySearch 组件（搜索框组件）
import CitySearch from './components/Search.vue'
// 引入 CityList 组件 （城市列表）
import CityList from './components/List.vue'
// 引入 CityAlphabet 组件 (字母表)
import CityAlphabet from './components/Alphabet.vue'
   export default {
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        }
    }
</script>

<style scoped>

</style>