<template>
    <div>
        <!-- 城市信息页面头部 城市管理部分 -->
         <city-header></city-header>
         <!-- 城市信息页面 搜索框组件 -->
         <city-search></city-search>
         <!-- 城市信息 城市列表页面组件 -->
         <city-list :cit="cities" :hot="hotCities"></city-list>
         <!-- 城市信息 城市字母表 -->
         <city-alphabet :alpdata="cities"></city-alphabet>
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
 
//  引入 axios
import axios from 'axios'
  export default {
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data() {
            return {
                cities:{},
                hotCities:[]
            }
        },
        // 方法
        methods:{
            gitCityData(){
                axios.get('api/city.json').then(this.gitCityDataSucc)
            },
            gitCityDataSucc(res){
                res = res.data
                if(res.ret&&res.data){
                    const data = res.data
                    
                    this.hotCities= data.hotCities
                    this.cities = data.cities
                    console.log(data)
                }
            }
         },
        //  生命周期钩子 挂载到实例上
        mounted(){
           this.gitCityData()
        }
       
    }
</script>

<style scoped>

</style>