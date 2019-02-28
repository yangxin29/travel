<template>
    <ul class="list" >
         <li class="item" v-for="item in letters" 
             :key="item" 
             :ref="item"
             @click="headerletter"
             @touchstart = "headerTouchstart"
             @touchmove = "headerTouchmove"
             @touchend = "headerTouchend"
         >
             {{item}}
         </li>
    </ul>
</template>

<script>
export default {
  props: {
    alpdata: Object
  },
  computed: {
    letters() {
      const letters = [];
      //   循环对象alpdata 得到一个数组[A,B,....]
      for (let i in this.alpdata) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false, //标识符
      startY: 0,
      //  节流操作
      timer: null
    };
  },
  methods: {
    headerletter(e) {
      this.$emit("change", e.target.innerText);
    },
    // 移动端触摸事件
    headerTouchstart() {
      this.touchStatus = true;
    },
    headerTouchmove(e) {
      if (this.touchStatus) {
        //当标识符为true 的时候再能执行touchmove 事件
        if (this.timer) {
          clearTimeout(this.timer); //节流操作
        }
        // 节流操作
        this.timer = setTimeout(() => {
          //   事件对象里面有 touches对象
          // 手指滑动到的位置 （距离顶部的位置 需要减去上面蓝色部分）
          const touchY = e.touches[0].clientY - 89;
          // 字母位置 = touchY(手指距离蓝色边沿部分-A字母距离边沿部分)/每一个字母元素的高度  (取整)
          const index = Math.floor((touchY - this.startY) / 20);
          // 判断数字范围
          if (index >= 0 && index < this.letters.length) {
            // index 可以得出下标 将下标和生成的数组的下标关联起来
            // this.letters[index]
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    headerTouchend() {
      if (this.touchStatus) {
        this.touchStatus = false;
      }
    }
  },
  //   生命周期钩子  当数据发生改变的时候
  updated() {
    //   字母表A字母到定位父级的距离 （放在updated中是为了节约性能，）
    this.startY = this.$refs["A"][0].offsetTop;
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .item {
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>