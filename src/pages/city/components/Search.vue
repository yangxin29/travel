<template>
  <div>
      <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名称或拼音">
      </div>
      <!-- input下拉框区块 -->
      <div 
        ref="search" 
        class="search-content"
        v-show="keyword"
      >
        <ul>
          <li 
            class="search-item border-bottom"
            v-for="item in list" 
            :key="item.id"
             @click="headerCity(item.name)"
          >
            {{item.name}}
          </li>
          <li v-show="this.hasNoData" class="search-item border-bottom">
            没有匹配到数据
          </li>
        </ul>
      </div>
  </div>   
</template>

<script>
// 引入better-scroll
import Bscroll from "better-scroll";
import { mapMutations } from 'vuex';
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "", //input框的数据
      list: [], //input下拉列表的数据
      timer: null, //节流操作需要用的数据
    };
  },
  watch: {
    keyword() {
      // 节流操作
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        return (this.list = []);
      }
      // 节流操作
      this.timer = setTimeout(() => {
        // 定义空数组
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(val => {
            // 判断输入的拼音或者字母是否可以找到
            if (
              val.spell.indexOf(this.keyword) !== -1 ||
              val.name.indexOf(this.keyword) !== -1
            ) {
              result.push(val);
            }
          });
        }
        this.list = result;
      }, 100);
    },
    // 计算list的长度决定 提示信息的显示隐藏
  },
  computed:{
    hasNoData() {
      return !this.list.length
    }
  },
  methods:{
    headerCity(cityName) {
      // 调用dispatch 方法 定义一个change 方法 把cityName 传出去 传到actions中
      // this.$store.dispatch('changeCity',cityName)
      // 可以不用通过 actions 来修改数据 直接调用mutations
      // this.$store.commit("changeCity", cityName);
      this.changeCity(cityName)
      // 点击之后跳转到首页
      this.$router.push("/");
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    // console.log(this.$refs.search-box)
    this.scroll = new Bscroll(this.$refs.search,{
      click:true
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    padding: 0 0.2rem;
    line-height: 0.62rem;
    text-align: center;
    color: #666;
    font-size: 0.26rem;
    border-radius: 0.06rem;
    box-sizing: border-box;
  }
}

// input下拉框
.search-content {
  z-index: 1;
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  left: 0;
  background: #eeeeee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #ffffff;
  }
}
</style>