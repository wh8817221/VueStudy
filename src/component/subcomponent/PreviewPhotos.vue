<template>
  <div class="SongList">
    <!-- 用v-for循环渲染缩略图 -->
    <div class="covers" :style="{display:MinDisplay}">
      <div class="cover" v-for="(img,index) in photoInfo.photos" :key="index">
        <img :src="img.src" width="90%" class="min" @click="ZoomIn(index)" alt />
      </div>
    </div>
    <!-- 渲染放大后的图 -->
    <div class="max" :style="{display:display}">
      <div
        @click="ZoomOut"
        v-for="(img,index) in photoInfo.photos"
        :key="index"
        :class="[index===ShowIndex?'active':'None']"
      >
        <img :src="img.src" width="100%" />
      </div>
      <!-- 放大后图片下方的导航图 -->
      <div class="small">
        <div
          :class="[{'smallActive':index===ShowIndex},'cover-small']"
          v-for="(img,index) in photoInfo.photos"
          :key="index"
          @click="select(index)"
        >
          <img :src="img.src" width="90%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongList",
  data: function () {
    return {
      ShowIndex: 0,
      display: "none",
      MinDisplay: "flex",
    };
  },
  props: {
    photoInfo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ZoomIn(i) {
      this.display = "block";
      this.MinDisplay = "none";
      this.ShowIndex = i;
    },
    ZoomOut() {
      this.display = "none";
      this.MinDisplay = "flex";
    },
    select(i) {
      this.ShowIndex = i;
    },
  },
};
</script>
<style lang="css" scoped>
.SongList {
  width: 100%;
}
.covers {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cover {
  display: flex;
  justify-content: center;
  width: 33%;
  margin: 10px 0;
}
.min {
  border-radius: 10px;
  cursor: zoom-in;
  box-shadow: 0 0 9px #999;
}
.max {
  cursor: zoom-out;
  width: 100%;
}
.small {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cover-small {
  display: flex;
  justify-content: center;
  width: 10%;
  margin: 10px 0;
  opacity: 0.6;
  cursor: pointer;
}
.cover-small:hover {
  opacity: 1;
}
.active {
  display: flex;
}
.None {
  display: none;
}
.smallActive {
  opacity: 1;
}
</style>