import { Toast, Indicator } from 'mint-ui';

class NetworkTools {
    get(url, success, failed, isShowLoading=true) {
        if (isShowLoading) {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
        }
        
        setTimeout(() => {
            if (isShowLoading) {
                Indicator.close();
            }
            success();
        }, 1000);
    
        // this.$http.get(url).then(result=>{
        //     if (result.body.status === 0) {
        //         Indicator.close();
        //         success(result.body);
        //     } else {
        //         Indicator.close();
        //         if (failed) {
        //             failed(result.body)
        //         } else {
        //             Toast("获取数据失败");
        //         }
        //     }
        // })
    }
}

export default new NetworkTools();

// function get(url, success, failed) {
//     Indicator.open({
//         text: '加载中...',
//         spinnerType: 'fading-circle'
//     });
//     setTimeout(() => {
//         Indicator.close();
//         success();
//     }, 1000);

//     // this.$http.get(url).then(result=>{
//     //     if (result.body.status === 0) {
//     //         Indicator.close();
//     //         success(result.body);
//     //     } else {
//     //         Indicator.close();
//     //         if (failed) {
//     //             failed(result.body)
//     //         } else {
//     //             Toast("获取数据失败");
//     //         }
//     //     }
//     // })
// }


// static function postRequestData(url, success, failed) {
//     this.$http.get(url).then(result=>{
//         if (result.body.status === 0) {
//             success(result.body);
//         } else {
//             if (failed) {
//                 failed(result.body)
//             } else {
//                 Toast("获取数据失败");
//             }
//         }
//     })
// }