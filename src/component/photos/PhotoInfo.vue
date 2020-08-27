<template>
  <div class="photoInfo-container">
    <h3 class="photoInfo-title">{{ photoInfo.title }}</h3>
    <p class="photoInfo-subtitle">
      <span>发表时间: {{ photoInfo.add_time | dateFormat }}</span>
      <span>单击: {{ photoInfo.click }}次</span>
    </p>
    <hr />
    <!-- 缩略图区域 -->
    <div class="photoInfo-preview">
        <!-- <previewphoto :photoInfo="photoInfo"></previewphoto> -->
        <vue-preview :slides="photoInfo.photos" @close="handleClose"></vue-preview>
    </div>
    <!-- 内容区域 -->
    <div class="photoInfo-content">{{ photoInfo.content }}</div>
    <!-- 评论区域 -->
    <comment :id="this.id"></comment>
  </div>
</template>
<script>
import comment from "../subcomponent/Comment.vue";
import previewphoto from '../subcomponent/PreviewPhotos.vue';
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      this.$networkTools.getRequestData("api/getimageInfo/" + this.id, () => {
        this.photoInfo = {
          add_time: new Date(),
          click: 0,
          content:
            "两只老鼠跑的快跑的快,一只没有耳朵,一直没有尾巴,真奇怪,真奇怪",
          id: 1,
          title: "奇怪的老鼠",
          photos: [
            {
              src:
                "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
              msrc:
                "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
              alt: "picture1",
              title: "Image Caption 1",
              w: 150,
              h: 150,
            },
            {
              src:
                "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
              msrc:
                "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
              alt: "picture2",
              title: "Image Caption 2",
              w: 150,
              h: 150,
            },
            {
              src:
                "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
              msrc:
                "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
              alt: "picture2",
              title: "Image Caption 2",
              w: 150,
              h: 150,
            },
            {
              src:
                "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
              msrc:
                "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
              alt: "picture2",
              title: "Image Caption 2",
              w: 150,
              h: 150,
            },
          ],
        };
      });
    },
    handleClose() {
      console.log("close event");
    },
  },
  components: {
    comment,
    previewphoto,
  },
};
</script>
<style lang="css" scoped>
.photoInfo-container {
  padding: 3px;
}
.photoInfo-container .photoInfo-title {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0px;
}
.photoInfo-container .photoInfo-subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.content {
  font-size: 13px;
  line-height: 30px;
}
/* .photoInfo-preview img{
    margin: 10px;
    box-shadow: 0 0 8px #999;
} */
</style>