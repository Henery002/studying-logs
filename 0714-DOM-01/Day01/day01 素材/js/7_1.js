//实现伸缩二级菜单
function toggle(span){	//span->this
	//如果span的class是 open
		//修改span的classname为closed
		//将span下一个兄弟元素的classname改为hide
	//否则
		//查找class为open的span，保存在oldSpan中
		//如果span不是null
			//修改oldSpan的classname为closed
			//将oldSpan下一个兄弟元素的classname改为hide
		//修改span的classname为open
		//将span下一个兄弟元素的classname改为show
	//var span=document.getElementsByTagName('span');
	if(span.className=='open'){
		span.className='closed';
		span.nextElementSibling.className='hide';
	}else{
		//因为一项展开的同时其他项必须关闭，所以同时存在的open只有一个
		var oldSpan=document.querySelector('.open');	
		if(oldSpan!=null){
			oldSpan.className='closed';
			oldSpan.nextElementSibling.className='hide';
		}
		span.className='open';
		span.nextElementSibling.className='show';
	}
}