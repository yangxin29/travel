<template>
    <div class="header">
       <!-- 图标 -->
       <router-link to="/">
          <span class="iconfont">&#xe600;</span>
       </router-link>
       城市选择
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
   .header
      position relative
      overflow hidden
      height $HeaderHeight
      line-height $HeaderHeight
      text-align center
      color #ffffff
      background $bgColor
      font-size .32rem
      .iconfont
        position absolute
        top 0
        left 0
        width  .64rem
        text-align center
        color #ffffff
</style>