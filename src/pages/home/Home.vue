<template>
    <div>
        <!-- 头部组件 -->
        <home-header></home-header>
    </div>
</template>

<script>
    // 引入Homeheader 组件
    import HomeHeader from './components/Header.vue'
    export default {
        components:{
            // 注册HomeHeader组件
            HomeHeader,
        }
    }
</script>

<style scoped>

</style>