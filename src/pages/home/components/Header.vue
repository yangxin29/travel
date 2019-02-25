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
        <div class="header-rigth">
            城市
            <span class="iconfont right">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {};

//  1rem = html font-size = 50px ,但是设计图是2倍图
</script>

<style lang="stylus" scoped>
// 引入定义的varibles文件
@import  '~styles/varibles.styl'


// header区域的盒子
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.86rem;
  //使用varibles里面的变量
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
    width: 1.24rem;
    height: 100%;
    // 图标样式
    .right{
        font-size .24rem
        margin-left .1rem
    }
  }
}
</style>