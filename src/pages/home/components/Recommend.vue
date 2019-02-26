<template>
    <div>
        <!-- 标题 -->
       <div class="title">热销推荐</div>
       <ul>
           <!-- 每一个推荐 -->
           <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
               <!-- 图片 -->
                <img class="item-img" :src="item.imgUrl" alt="图片不见了">
               <!-- 右侧文字 -->
               <div class="item-info">
                   <!-- 景区标题 -->
                   <p class="item-title">{{item.title}}</p>
                   <p class="item-desc">{{item.desc}}</p>
                   <button class="item-button">查看详情</button>
               </div>

           </li>
       </ul>
    </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_200x200_4ab5da75.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1408/18/af4e8d5427a982540ec265b0daab2971.jpg_200x200_85ce10be.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "003",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1505/a9/a9cd8c8550398407.water.jpg_200x200_4fb81eb4.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "004",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1412/36/0b5ddfc9e04db2b870a84986fa7444a0.water.jpg_200x200_8d4c75ab.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "005",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/201303/04/1ad9f7e93228c5f0c8d65eac.jpg_200x200_babe58c5.jpg",
          title: "爱晚亭",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "006",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1412/68/42da26a54c27a3c237b4d10a61583c36.water.jpg_200x200_a38c904d.jpg",
          title: "靖港古镇",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
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
    //技巧，解决溢出问题
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
  border:none;
}
</style>