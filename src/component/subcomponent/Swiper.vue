<template>
    <div class="swip-container">
        <div class="swip_banner">
            <mt-swipe :auto="2000">
              <mt-swipe-item v-for="item in banners" :key="item.url">
                <img :src="item.img" :class="{full: isFull}" alt />
              </mt-swipe-item>
            </mt-swipe>
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    props: ["banners", "isFull"],
    methods:{
    }
}
</script>
<style lang="css" scoped>
.swip_banner {
  height: 200px;
  text-align: center;
}
.swip_banner img {
  height: 100%;
}
.full{
  width: 100%;  
}
</style>