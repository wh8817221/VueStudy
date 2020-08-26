<template>
  <div>
    <!-- 轮播图 -->
    <div class="swip_banner">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in banners" :key="item.url">
          <img :src="item.img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: null,
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598330689017&di=d5d55685c7674bd087b67eb317bb6810&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20170207%2F20170207131327_58fabff66f77a2730d1344281f6891ed_1.jpeg",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598330689017&di=d5d55685c7674bd087b67eb317bb6810&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20170207%2F20170207131327_58fabff66f77a2730d1344281f6891ed_1.jpeg",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598330689017&di=25ec21b3011242a804482873f852ab43&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130625%2F7447430_153500063000_2.jpg",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598330689017&di=25ec21b3011242a804482873f852ab43&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130625%2F7447430_153500063000_2.jpg",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598330689016&di=972e2125f75255bab4ce3f8795ef09c1&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D2485189c9a504fc2a25fb00dd5dce7f0%2Fdc1f7b899e510fb3048fe303d833c895d3430ce5.jpg",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598330689016&di=972e2125f75255bab4ce3f8795ef09c1&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D2485189c9a504fc2a25fb00dd5dce7f0%2Fdc1f7b899e510fb3048fe303d833c895d3430ce5.jpg",
        },
      ];
      // this.$http.get('api/getlunbo').then(result => {
      //     console.log(result.body);
      // })
    },
  },
};
</script>
<style lang="css" scoped>
.swip_banner {
  height: 200px;
}
.swip_banner img {
  width: 100%;
  height: 100%;
  
}
.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
}

.mui-grid-view.mui-grid-9 img{
    width: 60px;
    height: 60px;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}

</style>