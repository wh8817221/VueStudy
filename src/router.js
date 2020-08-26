import VueRouter from 'vue-router';
import HomeContiner from './component/tabbar/HomeContainer.vue';
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopcarContainer from './component/tabbar/ShopcarContainer.vue'
import SearchContiner from './component/tabbar/SearchContainer.vue'
import NewsList from './component/news/NewsList.vue';
import NewsInfo from './component/news/NewsInfo.vue';
var router = new VueRouter({
    routes: [ //配置路由
        { path: '/', redirect: '/home'},//重定向
        { path: '/home', component: HomeContiner},
        { path: '/member', component: MemberContainer},
        { path: '/shopcar', component: ShopcarContainer},
        { path: '/search', component: SearchContiner},
        { path: '/home/newslist', component: NewsList},
        { path: '/home/newsinfo/:id', component: NewsInfo},
    ],
    linkExactActiveClass: 'mui-active'
});

export default router;