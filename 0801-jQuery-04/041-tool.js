//工具函数：
//我的工具库
//尽可能减少全局对象的污染
if(!window.jQuery){
	throw new Error('当前工具库必须依赖于jQuery');
}
	//tool称为名称空间对象 namespace

jQuery.tool={};
/*******返回一个数组中所有元素的平均值********/
jQuery.tool.avg=function(arr){
	var sum=0;
	var avg=0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	average=sum/arr.length;
	return average;
};
/*******返回一个数组中所有元素的最大值********/
jQuery.tool.max=function(arr){
	var max=arr[0];
	for(var i=1;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i];
		}
	}
	return max;
};
/*******返回一个数组中所有元素的最小值********/
jQuery.tool.min=function(arr){
	var min=arr[0];
	for(var i=1;i<arr.length;i++){
		if(min>arr[i]){
			min=arr[i];
		}
	}
	return min;
};














