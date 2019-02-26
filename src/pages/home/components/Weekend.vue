<template>
    <div>
        <!-- 标题 -->
       <div class="title">周末去哪儿</div>
       <ul>
           <!-- 每一个推荐 -->
           <li class="item" v-for="item in list" :key="item.id">
               <!-- 图片 -->
               <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl" alt="图片不见了">
               </div>
               <!-- 右侧文字 -->
               <div class="item-info">
                   <!-- 景区标题 -->
                   <p class="item-title">{{item.title}}</p>
                   <p class="item-desc">{{item.desc}}</p>
               </div>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: "HomeWeekend"
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

// 标题
.title {
  padding-left: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  box-sizing: border-box;
}

.item {
  margin-bottom: 0.1rem;

  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    // 图片
    .item-img {
      width: 100%;
    }
  }

  // 右侧的内容
  .item-info {
    padding: 0.2rem;

    // 景区标题
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    // 景区介绍
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}

.item:last-child {
  margin-bottom: 0;
}
</style>