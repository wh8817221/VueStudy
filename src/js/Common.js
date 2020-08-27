import NetworkTools from '../js/NetworkTools.js';
import Hud from '../js/HUD.js';
exports.install = function(Vue, options) {
    //全局判断字符串是否为空
    Vue.prototype.$stringIsEmpty = function(str) { //全局函数1
        if ( str == "" ) return true;
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    };
    //全局函数测试
    Vue.prototype.$networkTools = NetworkTools;
    Vue.prototype.$hud = Hud;
}
