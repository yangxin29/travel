<template>
  <div id="app">
    <!-- exclude 除了Detail 页面以外 其余的页面都做缓存 -->
    <keep-alive exclude="Detail">
       <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
// swiper 圆点的激活样式

</style>
