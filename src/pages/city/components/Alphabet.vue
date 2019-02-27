<template>
    <ul class="list">
         <li class="item">A</li>
         <li class="item">A</li>
         <li class="item">A</li>
         <li class="item">A</li> 
    </ul>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
    .item{
        line-height :.4rem;
        color :$bgColor
    }
}
</style>