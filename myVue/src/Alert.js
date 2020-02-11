import Vue from 'vue'
import Alert from './Alert.vue'

var myAlert = (function(){
    var defaults = {
        title : '弹窗',
        body : '',
        cancelBtn : null,
        confirmBtn : null
    };
    
    var MyComponent  = Vue.extend(Alert);

    return function(opts){
        for( var attr in opts ){  //把配置参数覆盖给默认参数
            defaults[attr] = opts[attr]
        }
        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                alert_title : defaults.title,
                customBody : defaults.body,
                confirmBtn : defaults.confirmBtn,
                cancelBtn : defaults.cancelBtn
            }
        });
        document.body.append(vm.$el)
    }
})()

export default myAlert; 