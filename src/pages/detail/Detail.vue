<template>
    <div>
        <!-- 详情页面轮播图组件 -->
        <detail-banner></detail-banner>
        <!-- header效果 -->
        <detail-header></detail-header>
        <!-- list组件 -->
        <div class="content">
          <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
// 引入 banner 组件
import DetailBanner from "./components/Banner.vue";
// 引入 DetailHeader 组件 （渐隐渐现效果）
import DetailHeader from "./components/Header.vue";
// 引入 list 组件 
import DetailList from "./components/List.vue";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list:[{
        title:"成人票",
        children:[{
          title:'成人五馆联票',
          children:[{
            title:'成人五馆联票-某一连锁店销售',
          }]
        },{ 
          title:'成人三馆联票'
        }]
      },{
        title:"学生票",
        children:[{
          title:'成人三馆联票'
        }]
      },{
        title:"儿童票"
      },{
        title:'特惠票'
      }]
    }
  },
};
</script>

<style scoped>
.content{
  height: 50rem
}
</style>