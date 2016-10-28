var fn = {
	ready: function(){
		document.addEventListener("deviceready",fn.init,false);
	},
	init: function(){
		//alert("HOLA");
		navigator.geolocation.getCurrentPosition(fn.onSuccess,fn.onError);
	},
	onSuccess: function(p){
		navigator.notification.alert(p.coords.latitude + "\n" + p.coords.longitude + "\n" + p.timestamp);
	},
	onError: function(e){
		navigator.notification.alert(e.code + "\n" + e.message);
	}
};
$(fn.ready);