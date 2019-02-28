<template>
    <div>
        <!-- 标题 -->
       <div class="title">热销推荐</div>
       <ul>
           <!-- 每一个推荐 -->
          <router-link  
            tag="li" class="item border-bottom" 
            v-for="item in list" 
            :key="item.id"
            :to="'/detail'+ item.id"
          >
            <!-- 图片 -->
              <img class="item-img" :src="item.imgUrl" alt="图片不见了">
            <!-- 右侧文字 -->
            <div class="item-info">
                <!-- 景区标题 -->
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
          </router-link>
       </ul>
    </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

// 标题
.title {
  margin-top: 0.2rem;
  padding-left: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  box-sizing: border-box;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  margin-bottom: 0.1rem;
  padding: 0.1rem;

  // 图片
  .item-img {
    width: 2rem;
    height: 2rem;
    padding: 0.1rem;
    box-sizing: border-box;
  }

  // 右侧的内容
  .item-info {
    flex: 1;
    // 技巧，解决溢出问题
    min-width: 0;
    padding: 0.1rem;

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

    .item-button {
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      line-height: 0.44rem;
      color: #fff;
      border-radius: 0.06rem;
    }
  }
}

.item:last-child {
  margin: 0;
  border: none;
}
</style>