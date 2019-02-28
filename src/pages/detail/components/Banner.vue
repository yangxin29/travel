<template>
    <div>
        <div class="banner" @click="headerBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1505/57/579b6c97900745db.water.jpg_600x330_a7a104d2.jpg" alt="图片不见了">
            <!-- 图片信息 -->
            <div class="img-info">
                <!-- 文字信息部分 -->
                <p class="img-title">橘子洲(AAAA景区)</p>
                <!-- 数字部分 -->
                <div class="img-number">
                    <span class="iconfont branner-icon">&#xe6df;</span>
                    22
                </div>
            </div>
        </div>
         <!-- 画廊组件 -->
        <common-gallary :imges="imges" v-show="bannerShow" @close = 'headerGallaryClick'></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
    components:{
        CommonGallary
    },
    data() {
        return {
            bannerShow:false,
            imges:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
        }
    },
    methods:{
        headerBannerClick(){
            this.bannerShow = true
        },
        // 点击取消画廊事件
        headerGallaryClick(){
            this.bannerShow = false
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

  .banner-img {
    width: 100%;
  }

  // 图片信息部分
  .img-info {
    position: absolute;
    display flex
    align-items center
    left: 0;
    right: 0;
    bottom: 0;
    line-height .6rem
    color #fff
    background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    // 图片标题
    .img-title{
        flex 1
        padding 0.2rem
        font-size .32rem
        box-sizing border-box
    }
    // 图片张数
    .img-number{
        height .32rem
        padding 0 .4rem
        line-height .32rem
        background rgba(0,0,0,.8)
        font-size .24rem
        border-radius  .2rem
        .branner-icon{
            font-size .24rem
        }
    }
  }
}
</style>