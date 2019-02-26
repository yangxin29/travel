<template>
    <div class="container">
       <!-- 每一个图标 -->
        <swiper :options="swiperOption">
            <!-- slides -->
            <!-- 第一层循环出页码 -->
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <!-- 图片 -->
                    <img class="icon-img" :src="item.imgUrl" alt="图片不见了">
                    <!-- 说明文字 -->
                    <p class="text">{{item.desc}}</p>
                </div>
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
        // pagination: ".swiper-pagination" //  分页功能
      },
      //   图片数据列表
    };
  },
  //   计算属性
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8); //计算得出页码(利用向下取整)
        if (!pages[page]) {
          pages[page] = []; //判断二维数组里面的小数组是否为空，没有则让小数组为空数组
        }
        pages[page].push(item); //将iconList里面的每一项push到小数组中
      });
      return pages; //将数组返回出去
    }
  }
};
</script>

<style lang="stylus" scoped>
// 引入定义的varibles文件
@import '~styles/mixins.styl';

.container >>> .swiper-container .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  box-sizing: border-box;
}

// .container >>> .swiper-pagination swiper-pagination-bullets {
// margin-bottom: -.2rem !important;
// }
// .container >>> .swiper-pagination-bullet{
// width 6px
// height 6px
// }
.container {
  margin-top: 0.1rem;

  .icon {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    box-sizing: border-box;

    .icon-img {
      display: block;
      width: 1.1rem;
      height: 1.1rem;
      margin: 0.1rem auto;
    }

    // 说明文字样式
    .text {
      margin-top: 0.1rem;
      text-align: center;
      color: $TextColor;
      ellipsis();
    }
  }
}
</style>