<template>
    <div>
        
        <router-link  
            class="header-icon" 
            to="/" 
            tag="div"
            v-show="showIcon"
        >
            <!-- 图标 -->
            <span class="iconfont">&#xe600;</span>
        </router-link>

        <div class="header-fixed" 
             v-show="!showIcon"
             :style="opacityStyle"
        >
             <!-- 图标 -->
            <router-link to="/">
                <span class="iconfont">&#xe600;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showIcon: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    headerScroll() {
      // 获取滚动高度 除了ie 都能兼容
      const top = document.documentElement.scrollTop;
      if (top > 50) {
        let opacity = top / 120;
        opacity = opacity > 1 ? 1 : opacity;
        this.showIcon = false;
        this.opacityStyle = {
          opacity
        };
      } else {
        this.showIcon = true;
      }
    }
  },
  // 使用keep-alive 产生的钩子函数
  activated() {
    window.addEventListener("scroll", this.headerScroll);
  },
  //   页面即将被替换成新的页面之后触发 deactivated 钩子函数
  deactivated() {
    //   解绑事件，避免在其他的页面中也能触发 scroll 事件
    window.removeEventListener("scroll", this.headerScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-icon {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.8rem;

  .iconfont {
    color: #ffffff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: $HeaderHeight;
  line-height: $HeaderHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;
  font-size: 0.32rem;

  .iconfont {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    color: #ffffff;
  }
}
</style>