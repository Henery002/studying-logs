//1、定义任务函数
function calc(){
	//获得当前时间now
	var now=new Date();
	//定义目标时间target为：2016/07/19 6:30
	var target=new Date('2016/07/19 18:30:00');
	//计算秒数差s：(target-now)/1000	//target-now得到的是毫秒数
	var s=parseInt((target-now)/1000);
	//如果s>=0
	if(s>0){
		//根据s计算小时h:
				//取 秒数s/3600的整数部分作为小时h
		var h=parseInt(s/3600);	
		//如果h小于10，就改为0+h
		h<10&&(h='0'+h);
		//根据s计算分钟m
		var m=parseInt((s%3600)/60);
		//如果m小于10，就改为0+m
		m<10&&(m='0'+m);
		//计算s:
		s%=60;
		//如果s小于10，就改为0+s
		s<10&&(s='0'+s);
		//设置id为time的元素的内容为：h:m:s
		time.innerHTML=(time.innerHTML.indexOf(':')==-1)?(' '+h+':'+m+":"+s):
														(' '+h+' '+m+" "+s);
		//否则
	}else{
		time.innerHTML=' 00:00:00';
	}
}
calc();
//2、启动定时器
var timer=setInterval(calc,500);
//3、手动停止：
function toggle(btn){
	//如果
	if(timer!=null){
		clearInterval(timer);
		timer=null;
		//设置btn的内容为|>
		btn.innerHTML='|>';
	}else{
	//否则
		timer=setInterval(calc,500);
		btn.innerHTML='||';
	}
}