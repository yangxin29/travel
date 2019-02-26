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
  data() {
    return {
      swiperOption: {
        // pagination: ".swiper-pagination" //  分页功能
      },
      //   图片数据列表
      iconList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "长沙必游"
        },
        {
          id: "004",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          desc: "亲子游"
        },
        {
          id: "005",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "游乐场"
        },
        {
          id: "006",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "007",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
          desc: "自然风光"
        },
        {
          id: "008",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
          desc: "湘西凤凰"
        },
        {
          id: "009",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
          desc: "橘子洲"
        },
        {
          id: "010",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc: "泡温泉"
        }
      ]
    };
  },
  //   计算属性
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
</style>