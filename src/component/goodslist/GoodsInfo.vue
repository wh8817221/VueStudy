<template>
  <div class="good-info">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :banners="banners" :isFull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <del>市场价: ¥2399</del>&nbsp;&nbsp;销售价:
            <span class="now-price">¥2199</span>
          </p>
          <div class="good-buy">
            购买数量:
            <numberbox @getCount="getSelectedCount" :max="maxCount"></numberbox>
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品详情 评论 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品编号: 202802930903290</p>
          <p>库存情况: {{ maxCount }}件</p>
          <p>上架时间: 2020-09-09</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDec(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponent/Swiper.vue";
import numberbox from "../subcomponent/GoodsInfoNumbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      banners: [],
      ballFlag: false,
      selectedCount: 1, //用户购买数
      maxCount: 60,
    };
  },
  created() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      this.banners = [
        {
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945960.00664304.jpg",
          url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945960.00664304.jpg",
        },
        {
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.89763789.jpg",
          url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.89763789.jpg",
        },
        {
          img:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
          url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg",
        },
      ];
      // this.$http.get('api/getlunbo').then(result => {
      //     console.log(result.body);
      // })
    },
    //去图文介绍
    goDec(id) {
      this.$router.push({
        name: "goodsdec",
        params: { id },
      });
    },
    //去商品评论评论
    goComment(id) {
      this.$router.push({
        name: "goodscomment",
        // params: {id}
      });
    },
    //加入到购物车
    addShopCar() {
      this.ballFlag = true;
    },
    getSelectedCount(count) {
      console.log(count);
      this.selectedCount = count;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      //计算便宜位置
      const ballRect = this.$refs.ball.getBoundingClientRect();
      const badgeRect = document
        .getElementById("shopcar-badge")
        .getBoundingClientRect();
      const offsetX = badgeRect.left - ballRect.left;
      const offsetY = badgeRect.top - ballRect.top;

      el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      el.style.transition = "all 0.5s cubic-bezier(0.4, -0.3, 1, 0.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = false;
    },
  },
  components: {
    swiper,
    numberbox,
  },
};
</script>
<style lang="css" scoped>
.good-info {
  background-color: #eee;
  overflow: hidden;
  position: relative;
}
.swip_banner {
  height: 200px;
}
.swip_banner img {
  width: 100%;
  height: 100%;
}
.good-buy {
  padding: 4px 0px;
}
.now-price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.mui-card-footer {
  display: flex;
  flex-direction: column;
  height: 115px;
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 355px;
  left: 140px;
}
</style>