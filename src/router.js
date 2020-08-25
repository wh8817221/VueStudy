import VueRouter from 'vue-router';
import HomeContiner from './component/tabbar/HomeContainer.vue';
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopcarContainer from './component/tabbar/ShopcarContainer.vue'
import SearchContiner from './component/tabbar/SearchContainer.vue'

var router = new VueRouter({
    routes: [ //配置路由
        { path: '/', redirect: '/home'},//重定向
        { path: '/home', component: HomeContiner},
        { path: '/member', component: MemberContainer},
        { path: '/shopcar', component: ShopcarContainer},
        { path: '/search', component: SearchContiner},
    ],
    linkExactActiveClass: 'mui-active'
});

export default router;