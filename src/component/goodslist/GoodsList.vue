<template>
  <div class="goods-list">
    <router-link class="goods-item" v-for="(item,i) in goodsList" :key="i" :to='"/home/goodsinfo/"+item.id'>
      <img
        :src="item.img_url"
        alt
      />
      <h1 class="goods-title">{{ item.title }}</h1>
      <div class="goods-info">
        <p class="goods-price">
          <span class="now">¥{{ item.now }}</span>
          <span class="old">¥{{ item.old }}</span>
        </p>
        <p class="goods-sell">
          <span>{{ item.hot }}</span>
          <span>剩余{{ item.surplus }}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        goodsList: []
    };
  },
  created(){
      this.getGoodsList();
  },
  methods: {
      getMore(){
          var good = {
                      id: 10,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  }
          this.goodsList.push(good);
      },
      getGoodsList(){
          this.$networkTools.get('', ()=>{
              this.goodsList = [
                  {
                      id: 1,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 2,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 3,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 4,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 5,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 6,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 7,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 8,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
                  {
                      id: 9,
                      img_url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
                      title: "小米10至尊纪念版",
                      old: "3000",
                      now: "2999",
                      hot: "热卖中",
                      surplus: 60,
                  },
              ]
          });
      }
  },
};
</script>
<style lang="css" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-list .goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 4px #999;
  border-radius: 4px;
  margin: 4px 0px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  min-height: 293px;
}

.goods-list .goods-item img {
  width: 100%;
}
.goods-title {
  font-size: 14px;
  padding: 5px 0px;
}
.goods-info {
  background-color: #eee;
}
.goods-info p {
  padding: 5px;
}
.goods-info .goods-price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods-info .goods-price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.goods-sell {
  display: flex;
  justify-content: space-between;
}
</style>