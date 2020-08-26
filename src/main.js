import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource)
//全局配置baseUrl
Vue.http.options.root = "http://vue.studyit.io";
//导入bootstrap样式
// import 'bootstrap/dist/css/bootstrap.css';

import moment from 'moment';
//定义全局过滤器
Vue.filter('dateFormat', function(dateStr, pattern="YYYY-MM-DD  HH:mm:ss"){
    return moment(dateStr).format(pattern);
});

//导入mintui组件
import { Header, Tabbar, TabItem,  Swipe, SwipeItem, Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
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