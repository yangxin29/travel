<template>
    <div>
        <!-- 详情页面轮播图组件 -->
        <detail-banner></detail-banner>
        <!-- header效果 -->
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
// 引入 banner 组件
import DetailBanner from "./components/Banner.vue";
// 引入 DetailHeader 组件 （渐隐渐现效果）
import DetailHeader from "./components/Header.vue";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style scoped>
.content{
  height: 50rem
}
</style>