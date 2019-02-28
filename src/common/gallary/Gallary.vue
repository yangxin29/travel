<template>
    <div class="container" @click="headelBanerClick">
       <div class="wrapper">
           <swiper :options="swiperOption" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imges" :key="index">
                    <img class="swiper-img" :src="item" alt="图片不见了">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
       </div>
    </div>
</template>

<script>
export default {
    props:{
        imges:{
            type:Array,
            default(){
                return []
            }
         }
    },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        //  将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents:true,
        // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        // 监听swiper dom 发生变化时 从新计算width height
        observer:true,   
      },
    //   图片
    //  imgArr:[']
    };
  },
  methods:{
      headelBanerClick(){
          //子组件传父组件使用自定义事件，使用$emit方法来触发监听的自定义事件
          this.$emit('close')
      }
  }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  z-index: 11;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;

  .wrapper {
    
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    background: #ffffff;

    .swiper-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>