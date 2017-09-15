//手写dropdown插件
jQuery.fn.dropdown=function(){
	console.log(this);		//this --> jQuery类数组对象
	this.children('span').click(function(){
			//this-->DOM对象:<span></span>
		//$('ul').toggleClass('dropdown-menu');
		$(this).next().slideToggle(1000);
	})
};