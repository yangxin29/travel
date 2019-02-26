<template>
    <div>
        <!-- 标题 -->
       <div class="title">周末去哪儿</div>
       <ul>
           <!-- 每一个推荐 -->
           <li class="item" v-for="item in recommendList" :key="item.id">
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
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg",
          title: "长沙必打卡",
          desc: "到了长沙，一定要到这些地方走走"
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1811/88/8d3b492ebf0b16.jpg_r_640x214_7b3a281d.jpg",
          title: "邂逅凤凰城",
          desc:
            "凤凰古城一个古老而神秘的地方，风景秀丽，历史悠久，人杰地灵，名贤辈出，名胜古迹众多"
        }
      ]
    };
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
  margin-bottom: 0.1rem;

  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;

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