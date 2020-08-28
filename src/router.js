import VueRouter from 'vue-router';
import HomeContiner from './component/tabbar/HomeContainer.vue';
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopcarContainer from './component/tabbar/ShopcarContainer.vue'
import SearchContiner from './component/tabbar/SearchContainer.vue'
import NewsList from './component/news/NewsList.vue';
import NewsInfo from './component/news/NewsInfo.vue';
import PhotoList from './component/photos/PhotoList.vue';
import PhotoInfo from './component/photos/PhotoInfo.vue';
import GoodsList from './component/goodslist/GoodsList.vue';
import GoodsInfo from './component/goodslist/GoodsInfo.vue';

import GoodsDec from './component/goodslist/GoodsDec.vue';
import GoodsComment from './component/goodslist/GoodsComment.vue';
var router = new VueRouter({
    routes: [ //配置路由
        { path: '/', redirect: '/home' },//重定向
        { path: '/home', component: HomeContiner },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContiner },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo},
        { path: '/home/goodsinfo/:id', component: GoodsDec, name: 'goodsdec' },
        { path: '/home/goodsinfo/:id', component: GoodsComment, name: 'goodscomment' },
         
    ],
    linkExactActiveClass: 'mui-active'
});

export default router;