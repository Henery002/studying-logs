/***********我的工具库_jQuery对象插件函数**************/
//可以
if(!window.jQuery){
	throw new Error('当前工具库必须依赖于jQuery');
}
	//为
jQuery.fn.avg=function(){
	var sum=0;
	//console.log($(this)[1].i);
	for(var i=0;i<this.length;i++){
		var dom=this[i].innerHTML;
		sum+=parseFloat(dom);
		//console.log($(this)[i]);
	}
	return sum/this.length;
	//console.log(this);	//指向当前的jQuery类数组对象。
}
jQuery.fn.max=function(){	//this -> jQuery 类数组对象
	var max=parseFloat(this[0].innerHTML);
	for(var i=1;i<this.length;i++){
		if(max<parseFloat(this[i].innerHTML)){
			max=parseFloat(this[i].innerHTML);
		}
	}
	return max;
}
jQuery.fn.min=function(){
	var min=this[0].innerHTML;
	for(var i=0;i<this.length;i++){
		if(min>parseFloat(this[i].innerHTML)){
			min=parseFloat(this[i].innerHTML);
		}
	}
	return min;
}