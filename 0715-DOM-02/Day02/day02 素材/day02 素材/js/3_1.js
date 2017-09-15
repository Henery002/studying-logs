//摇号
//获得id为queue的ul下的所有li，保存在lis中
//遍历lis中的每个li
	//循环：true
	//在 1 - lis的元素个数 之间生成一个随机数r
	//查找id为queue的ul下 i属性为r的li
	//如果没找到，即li是null
		//为当前li设置i属性为r（setAttribute('',...)）
		//退出循环
var lis=queue.querySelectorAll('li');
for(var i=0;i<=lis.length;i++){
	while(true){
		var r=parseInt(Math.random()*lis.length+1);
		var li=queue.querySelector("#queue>li[data-i='"+r+"']");
		if(li==null){
			//lis[i].setAttribute('i',r);
			lis[i].dataset.i=r;		//HTML5中的自定义属性
			break;
		}
	}
}
//将lis转为普通数组，再按每个li的i属性值升序排序，在保存回变量lis中
lis=Array.prototype.silce.call(lis).sort(function(a,b){	//也可以写成 [].sort.call(...)
	//return a.getAttribute('i')-b.getAttribute('i');
	return a.dataset.i-b.dataset.i
})
//清除id为queue下的所有内容
queue.innerHTML='';
//遍历lis中每个li
for(var i=0;i<lis.length;i++){
	queue.appendChild(lis[i]);
}
	//该例？？？？？？？？？？？？？？？？？？？