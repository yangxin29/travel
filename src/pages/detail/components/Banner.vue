<template>
    <div>
        <div class="banner" @click="headerBannerClick">
            <img class="banner-img" :src="bannerImg">
            <!-- 图片信息 -->
            <div class="img-info">
                <!-- 文字信息部分 -->
                <p class="img-title">{{this.sightName}}</p>
                <!-- 数字部分 -->
                <div class="img-number">
                    <span class="iconfont branner-icon">&#xe6df;</span>
                    {{this.bannerImg.length}}
                </div>
            </div>
        </div>
         <!-- 画廊组件 -->
        <common-gallary :imges="gallaryImgs" v-show="bannerShow" @close = 'headerGallaryClick'></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary.vue";
export default {
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary
  },
  data() {
    return {
      bannerShow: false
    };
  },
  methods: {
    headerBannerClick() {
      this.bannerShow = true;
    },
    // 点击取消画廊事件
    headerGallaryClick(e) {
      this.bannerShow = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 55%;
  backgroun: #eee;

  .banner-img {
    width: 100%;
  }

  // 图片信息部分
  .img-info {
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    // 图片标题
    .img-title {
      flex: 1;
      padding: 0.2rem;
      font-size: 0.32rem;
      box-sizing: border-box;
    }

    // 图片张数
    .img-number {
      height: 0.32rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      border-radius: 0.2rem;

      .branner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>