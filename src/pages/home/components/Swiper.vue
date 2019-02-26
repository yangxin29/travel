<template>
    <div class="container">       
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id" >
                <img class="swiper-img" :src="item.imgUrl" alt="图片不见了">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: ".swiper-pagination", //  分页功能
        loop: true,
        // autoplay: {
        // //   delay: 3000, //间隔3秒自动滑动
        //   disableOnInteraction: false
        // },
        autoplay: 3000,
        autoplayDisableOnInteraction: false //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
    };
  },
  computed:{
    showSwiper(){
      // 监听list数组长度，解决轮播图首次页码显示问题
      return this.list.length
    }
  }
};
</script>

<style lang="stylus" scoped>
// >>> 作用：穿透
.container >>> .swiper-pagination-bullet-active {
  background: #ffffff !important;
}
// 圆点大小
.container >>> .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
}


.container {
  overflow;
  width: 100%;
  height: 0;
  padding-bottom: 26.6%;
  background: #eee;
  box-sizing: border-box;

  .swiper-img {
    width: 100%;
  }
}
</style>