<template>
    <div class="header">
        <!-- 左侧 -->
        <div class="header-left">
            <!-- 图标 -->
            <span class="iconfont">&#xe600;</span>
        </div>
        <!-- input 框 -->
        <div class="header-input">
            <span class="iconfont center">&#xe657;</span>
            输入 城市/景点/游玩主题
        </div>
        <!-- 右侧城市图标 -->
        <router-link to="/city">
          <div class="header-rigth">
              {{city}}
              <span class="iconfont right">&#xe64a;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
// vuex 的方法
import { mapState } from "vuex";
export default {
  computed: {
    //  扩展运算符
    // 把vuex 里面的数据映射到组件的computed属性里
    ...mapState(["city"])
  }
};

//  1rem = html font-size = 50px ,但是设计图是2倍图
</script>

<style lang="stylus" scoped>
// 引入定义的varibles文件
@import '~styles/varibles.styl';

// header区域的盒子
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.86rem;
  // 使用varibles里面的变量
  background: $bgColor;
  color: #ffffff;

  .header-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.64rem;
    height: 100%;
  }

  // 中间input框部分
  .header-input {
    flex: 1;
    display: flex;
    align-items: center;
    height: 0.64rem;
    margin-left: 0.2rem;
    padding-left: 0.1rem;
    background: #ffffff;
    color: #ccc;
    border-radius: 0.1rem;
    box-sizing: border-box;

    // 搜索图标样式
    .center {
      margin-right: 0.1rem;
    }
  }

  // 右侧城市图标部分
  .header-rigth {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1.04rem;
    height: 100%;
    padding: 0.1rem;
    color: #fff;

    // 图标样式
    .right {
      font-size: 0.24rem;
      margin-left: 0.1rem;
    }
  }
}
</style>