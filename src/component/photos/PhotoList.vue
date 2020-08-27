<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in catogorys"
            :key="item.id"
            @click="getPhotoList(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="image_list">
      <router-link tag="li" v-for="item in images" :key="item.id" :to="'/home/photoinfo/'+item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.dec }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
// import NetworkTools from '../../js/NetworkTools.js'
export default {
  data() {
    return {
      catogorys: [],
      images: [],
    };
  },
  mounted() {
    //如果要操作元素了,最好在mounted里
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getCatogorys();
    this.getPhotoList(0);
  },
  methods: {
    getCatogorys() {
      this.$networkTools.getRequestData("", () => {
        var arr = [
          { id: 0, 
            title: "全部" 
          },
          {
            id: 1,
            title: "电影",
          },
          {
            id: 2,
            title: "电视剧",
          },
          {
            id: 3,
            title: "动漫",
          },
          {
            id: 4,
            title: "综艺节目",
          },
          {
            id: 5,
            title: "娱乐",
          },
          {
            id: 6,
            title: "游戏",
          },
          {
            id: 7,
            title: "体育",
          },
        ];
        this.catogorys = arr;
        // this.catogorys = this.catogorys.concat(arr);
      });
    },
    getPhotoList(id) {
      this.$networkTools.getRequestData("api/getimages/" + id, () => {
        this.images = [
          {
            id: 1,
            title: "我是图片的标题",
            img_url:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327634394,3339972449&fm=26&gp=0.jpg",
            dec:
              "我是出租车司机一枚，正在正常行驶，被一位交警拦下。气的我怒怼交警：我没喝酒没违章没闯红灯，也没有撞人，你为什交警平静地说了一句：我打车..",
          },
          {
            id: 2,
            title: "我是图片的标题",
            img_url:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598503794953&di=481120521cb26a2882f5308b0abf6642&imgtype=0&src=http%3A%2F%2Fimg.255244.com%2Fyuan%2Fimg%2F201612190749249519.jpg",
            dec:
              "我是出租车司机一枚，正在正常行驶，被一位交警拦下。气的我怒怼交警：我没喝酒没违章没闯红灯，也没有撞人，你为什交警平静地说了一句：我打车..",
          },
          {
            id: 3,
            title: "我是图片的标题",
            img_url:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598503984441&di=75801f7038bb6bda7878be5e673a1d1a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F53e34c0da7308.jpg",
            dec:
              "我是出租车司机一枚，正在正常行驶，被一位交警拦下。气的我怒怼交警：我没喝酒没违章没闯红灯，也没有撞人，你为什交警平静地说了一句：我打车..",
          },
          {
            id: 4,
            title: "我是图片的标题",
            img_url:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598503794952&di=cafa25636108c3042476e47ffe3b0b80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F586c901269543.jpg",
            dec:
              "我是出租车司机一枚，正在正常行驶，被一位交警拦下。气的我怒怼交警：我没喝酒没违章没闯红灯，也没有撞人，你为什交警平静地说了一句：我打车..",
          },
          {
            id: 5,
            title: "我是图片的标题",
            img_url:
              "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3624321483,3636980941&fm=26&gp=0.jpg",
            dec:
              "我是出租车司机一枚，正在正常行驶，被一位交警拦下。气的我怒怼交警：我没喝酒没违章没闯红灯，也没有撞人，你为什交警平静地说了一句：我打车..",
          },
        ];
      });
    },
  },
};
</script>
<style lang="css" scoped>
* {
  touch-action: pan-y;
}
.image_list {
  padding: 10px;
  margin: 0px;
  padding-bottom: 0px;
}
.image_list li {
  text-align: center;
  list-style: none;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  position: relative;
}
.image_list li img {
  width: 100%;
  vertical-align: middle;
}
.info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  /* max-height: 84px;
  padding: 4px 4px; */
}
.info .info-title {
  font-size: 14px;
}

.info .info-body {
  font-size: 13px;
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>