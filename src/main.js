import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource)
//全局配置baseUrl
Vue.http.options.root = "http://vue.studyit.io";
Vue.http.options.emulateJSON = true;
//导入bootstrap样式
// import 'bootstrap/dist/css/bootstrap.css';

//定义全局过滤器
import moment from 'moment';
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD  HH:mm:ss") {
    return moment(dateStr).format(pattern);
});

//定义全局函数
import all from './js/Common.js';
Vue.use(all);//将全局函数当做插件来进行注册

//导入mintui组件
// import { Header, Tabbar, TabItem, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
//导入全局mint-ui组件
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
Vue.use(MintUI);
//导入图片预览组件
import VuePreview from 'vue-preview';
// Vue.use(VuePreview);
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: { top: 0, bottom: 0 },
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
});

//导入MUI的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//导入app组件
import app from './App.vue';

//导入自定义路由模块
import router from './router.js';

var vm = new Vue({
    el: '#app',
    render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
    router  // 4. 将路由对象挂载到 vm 上
})