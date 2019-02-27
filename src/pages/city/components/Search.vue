<template>
    <div class="search">
       <input class="search-input" type="text" placeholder="请输入城市名称或拼音">
    </div>
</template>

<script>
export default {};
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
    padding: 0  0.2rem;
    line-height: 0.62rem;
    text-align: center;
    color: #666;
    font-size:.26rem
    border-radius: 0.06rem;
    box-sizing: border-box;
  }
}
</style>