<template>
    <div>
        <!-- 头部组件 -->
        <home-header></home-header>
        <!-- 轮播图组件 -->
        <home-swiper></home-swiper>
        <!-- 图标轮播组件 -->
        <home-icons></home-icons>
        
    </div>
</template>

<script>
    // 引入Homeheader 组件
    import HomeHeader from './components/Header.vue'
    // 引入 HomeSwiper 组件(图片轮播)
    import HomeSwiper from './components/Swiper.vue'
    // 引入 HomeIcons 组件
    import HomeIcons from './components/Icons.vue'
    export default {
        components:{
            // 注册HomeHeader组件
            HomeHeader,
            HomeSwiper,
            HomeIcons,
        }
    }
</script>

<style scoped>

</style>