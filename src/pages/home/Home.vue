<template>
    <div>
        <!-- 头部组件 -->
        <home-header></home-header>
        <!-- 轮播图组件 -->
        <home-swiper></home-swiper>
        
    </div>
</template>

<script>
    // 引入Homeheader 组件
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    export default {
        components:{
            // 注册HomeHeader组件
            HomeHeader,
            HomeSwiper,
        }
    }
</script>

<style scoped>

</style>