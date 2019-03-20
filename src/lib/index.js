import ToastComponet from './vue-toast.vue'

let Toast = {}
Toast.install = function(Vue,options) {
	var opt = {
		defaultType:'center',
		duration: 3000
	}
	
	for(var key in options){
		opt[key] = options[key];
	}
	
	Vue.prototype.$toast = function(message,option){
		let callback = '';
		if(typeof option == 'object'){
			for(var key in option){
				opt[key] = option[key];
			}
		}else if(typeof option == 'function'){
          callback = option;
        }
		
		const ToastController = Vue.extend(ToastComponet);
		
		var instance = new ToastController().$mount(document.createElement("div"));
		
		instance.message = message;
		instance.visible = true;
		
		document.body.appendChild(instance.$el);
		
		setTimeout(()=>{
			instance.visible = false;
			document.body.removeChild(instance.$el);
			callback && callback();
		},opt.duration)
	}
	
	Vue.prototype.$toast['show'] = function(message,option) {
		Vue.prototype.$toast(message,option);
	}
	
	Vue.prototype.$toast['success'] = function(message,option) {
		Vue.prototype.$toast(message,option);
	}
	
	Vue.prototype.$toast['info'] = function(message,option) {
		Vue.prototype.$toast(message,option);
	}
	
	Vue.prototype.$toast['error'] = function(message,option) {
		Vue.prototype.$toast(message,option);
	}
	//后期扩展
// 	['show', 'success', 'info', 'error'].forEach(function(type) {
// 	    Vue.prototype.$toast[type] = function(message,option) {
// 	        return Vue.prototype.$toast(message,option)
// 	    }
// 	});
}

if(typeof window !== 'undefined' && window.Vue){
	window.Vue.use(Toast);
}

export default Toast;