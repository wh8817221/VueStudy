<template>
  <div class="good-info">
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
            <numberbox></numberbox>
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
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
          <p>库存情况: 60件</p>
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
      banners: [],
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
    goDec(id){
        this.$router.push({
            name: "goodsdec",
            // params: {id}
        });
    },
    //去商品评论评论
    goComment(id){
        this.$router.push({
            name: "goodscomment",
            // params: {id}
        });
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
.mui-card-footer{
    display: flex;
    flex-direction: column;
    height: 115px;
}

</style>