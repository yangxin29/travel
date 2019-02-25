<template>
    <div class="container">       
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.url" alt="图片不见了">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true,
        autoplay: {
          delay: 3000, //间隔3秒自动滑动
          disableOnInteraction: false
        },
        //  分页功能
        pagination: {
          el: ".swiper-pagination"
        }
      },
      //   图片列表
      swiperList: [
        {
          id: 1,
          url:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a211765c0bb579b18c6e7d6d75997a48.jpg_750x200_b6921fa6.jpg"
        },
        {
          id: 2,
          url:
            "https://imgs.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg"
        },
        {
          id: 3,
          url:
            "https://imgs.qunarzz.com/piao/fusion/1706/b9/6b91b49794f46402.jpg_750x200_d7f254e2.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// >>> 作用：穿透
.container >>> .swiper-pagination-bullet-active {
  background: #ffffff !important;
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