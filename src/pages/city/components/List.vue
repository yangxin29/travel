<template>
    <div class="list" ref="wrapper">
        <!-- 为了使用batter-scroll 需要将分散的div包裹，因为该插件只对wrap下面的子div有效 -->
        <div>
            <!-- 城市信息 -->
            <!-- 你的位置 -->
            <div class="area">
                <div class="title border-topbottom">你的位置</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">长沙</div>
                    </div>               
                </div>
            </div>
            <!-- 热门城市 -->
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 城市选项列表 -->
            <div class="area" 
                 v-for="(list,key) in cit" 
                 :key="key"
                 :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <!-- 城市列表项 -->
                <div class="item-list border-bottom" v-for="item in list" :key="item.id">
                    <div class="item"> {{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入better-scroll 插件
import BScroll from "better-scroll";

export default {
  props: {
    cit: Object,
    hot: Array,
    letter: String
  },
  watch: {
    letter(){
      if(this.letter){
          // 字母对应的区域
          const element = this.$refs[this.letter][0]
          // better-scroll 插件的api 实现滚动效果(必须是一个dom元素)
          this.scroll.scrollToElement(element)
      }
    }
  },
  mounted() {
    // better-scroll 的用法
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
  }
};
</script>

<style lang="stylus" scoped>
// 边框线的样式
.border-topbottom {
  &:after {
    border-color: #ccc;
  }

  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  left: 0;

  .title {
    line-height: 0.54rem;
    padding-left: 0.2rem;
    background: #eeeeee;
    font-size: 0.26rem;
    color: #666;
  }

  .button-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #cccccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>