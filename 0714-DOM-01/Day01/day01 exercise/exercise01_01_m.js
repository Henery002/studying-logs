//找到thead中的第一个th中的input
//找到tbody中的所有input
/*
function selectAll(){
	var span = document.querySelectorAll('tbody input');
	if(document.querySelector('thead input').checked=='true'){
		//document.querySelectorAll('tbody input').checked==true;
		for(var i=0,len=span.length;i<len;i++){
			span[i].checked=='true';
		}
	}else{
		for(var i=0,len=span.length;i<len;i++){
			span[i].checked=='false';
		}
	}
}
*/
//需要参数cb：即“全选”复选框，函数需要知道此复选框是否处于选定状态
function selectAll(all){
	var span = document.querySelectorAll('tbody input');
	for(var i=0;i<span.length;i++){
		span[i].checked = all.checked;
	}
}
//删除选定
function deleteAll(del){
	document.querySelector('thead input').checked = false;	//全选按钮
	var span = document.querySelectorAll('tbody input');
	for(var i=0;i<span.length;i++){
		span[i].checked = false;
	}
}