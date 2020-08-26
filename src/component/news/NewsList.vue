<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
                <span>发表时间: {{ item.add_time | dateFormat}}</span>
                <span>点击: {{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        newsList: null,
    };
  },
  created(){
      this.getNewsList();
  },
  methods: {
      getNewsList(){
          this.newsList = [
            { id: 1, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 2, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 3, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 4, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 5, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 6, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 7, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 8, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 9, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"},
            { id: 10, title: "小二", add_time: new Date(), zhaiyao: "哈哈哈是的就是", click: 5, img_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598355829059&di=cb7b5be781579d0f432cd37920bc1a03&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg"}
        ]

        // this.$http.get('api/getnewslist').then(result => {
      //     console.log(result.body);
      // })
      }
  },
};
</script>
<style lang="css" scoped>

.mui-table-view li h1 {
    font-size: 14px;
}

.mui-ellipsis{
    font-size: 12px;
    color: rgb(42, 42, 109);
    display: flex;
    justify-content: space-between;
}
</style>