<template>
    <div>
        <!-- 头部组件 -->
        <home-header></home-header>
        <!-- 轮播图组件 -->
        <home-swiper :list="swiperList"></home-swiper>
        <!-- 图标轮播组件 -->
        <home-icons :list="iconsList"></home-icons>
        <!-- 热销组件 -->
        <home-recommend :list="recommendList"></home-recommend>
        <!-- 周末去哪儿组件 -->
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
// 引入Homeheader 组件
import HomeHeader from "./components/Header.vue";
// 引入 HomeSwiper 组件(图片轮播)
import HomeSwiper from "./components/Swiper.vue";
// 引入 HomeIcons 组件
import HomeIcons from "./components/Icons.vue";
// 引入 Recommend 组件（热销）
import HomeRecommend from "./components/Recommend.vue";
// 引入 HomeWeekend 组件（周末去哪儿模块）
import HomeWeekend from "./components/Weekend.vue";

// 引入axsoi
import axsoi from "axios";

export default {
  components: {
    // 注册HomeHeader组件
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    gitHomeinfo() {
      // 发送 axsoi 请求数据
      axsoi.get("/api/index.json").then(this.gitHomeinfosucc);
    },
    // 获取到数据之后的回调函数
    gitHomeinfosucc(res) {
      // 请求过来的数据
      const date = res.data;
      // 判断是否有数据
      if (date.ret && date) {
        const data = date.data;
        // // 城市名称数据
        // this.city=data.city
        // 轮播图图片的数据
        this.swiperList = data.swiperList;
        // 小图标轮播图
        this.iconsList = data.iconList;
        // 热销组件的数据
        this.recommendList = data.recommendList;
        // 周末去哪儿的数据
        this.weekendList = data.weekendList;
      }
    }
  },
  // create() 组件刚刚创建好，此时发送请求可以节约一部分时间
  created() {
    this.gitHomeinfo();
  }
};
</script>

<style scoped>
</style>