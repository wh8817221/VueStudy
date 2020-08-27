import { Toast, Indicator } from 'mint-ui';

class Hud {
    showHUD(msg='', duration=1000, completed) {
        let instance = Toast({
            message: msg,
        });
        setTimeout(() => {
            instance.close();
            if (completed) {
                completed();  
            } 
        }, duration);
    }

    showSuccessHUD(msg='成功', duration=1000, completed) {
        let instance = Toast({
            message: msg,
            iconClass: 'icon icon-success'
        });
        setTimeout(() => {
            instance.close(); 
            if (completed) {
                completed();  
            }   
        }, duration);
    }

    showFailedHUD(msg='失败', duration=1000, completed) {
        let instance = Toast({
            message: msg,
            iconClass: 'icon icon-failed'
        });
        setTimeout(() => {
            instance.close(); 
            if (completed) {
                completed();  
            }  
        }, duration);
    }
}

export default new Hud();