<template>
    <div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <!-- 标题 -->
            <div class="item-title border-bottom">
                <!-- 小图标 -->
                <span class="item-title-icon"></span>
                 {{item.title}}
            </div>
            <!-- 递归组件 -->
            <div class="item-children" v-if="item.children">
                 <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.item-title {
  display: flex;
  align-items: center;
//   line-height: 0.8rem;
//   font-size: 0.32rem;
  padding: 0.2rem;

  .item-title-icon {
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}
// 二级菜单
.item-children{
   padding:0.2rem
}
</style>