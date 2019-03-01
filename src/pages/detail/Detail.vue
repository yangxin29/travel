<template>
    <div>
        <!-- 详情页面轮播图组件 -->
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
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
// 引入 axios
import axios from 'axios'
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[],
    }
  },
  methods:{
    getDataInfo(){
      // 相当于axios.get('/api/detail.json?id='+this.$route.params.id)
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.handleGetDateSucc)
    },
    handleGetDateSucc(res){
       res = res.data
       if(res.ret&&res.data){
         const data = res.data
        
        console.log(data)
        //  banner 标题
         this.sightName = data.sightName
        //  banner 图片
         this.bannerImg = data.bannerImg
        //  画廊图片
         this.gallaryImgs = data.gallaryImgs
        //  详细售票信息
        this.list = data.categoryList
       }
    }
  },
  mounted(){
    this.getDataInfo()
  }
};
</script>

<style scoped>
.content{
  height: 50rem
}
</style>