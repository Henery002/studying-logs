var game={
	PSIZE:0,	//保存主角div大小
	MAXTOP:0,	//保存最大可用的top
	MAXLEFT:0,	//保存最大可用的left
	init:function(){
		//获得id为pop的元素计算后的width转为浮点数保存在PSIZE
		//this.PSIZE=parseFloat(window.outerWidth-window.innerWidth);
		this.PSIZE=getComputedStyle(pop).width;
		//计算MAXTOP:显示区高-PSIZE
		this.MAXTOP=screen.availHeight-this.PSIZE;
		//计算MAXLEFT:显示区宽-PSIZE
		this.MAXLEFT=screen.availWidth-this.PSIZE;
	},
	start:function(){
		//初始化游戏属性
		//在0~MAXLEFT之间生成随机数l
		var l=parseInt(Math.random()*(this.MAXLEFT+1));
		//在0~MAXTOP之间生成随机数t
		var t=parseInt(Math.random()*(this.MAXTOP+1));
		//设置id为pop的元素的left为l
		//设置id为pop的元素的top为t
		this.moveTo(l,t);
		//留住this
		var me=this;
		//为pop绑定鼠标进入事件为：
		pop.onmouseover=function(){
			//循环执行：true
			while(true){
				//在0~MAXLEFT之间生成随机数l
				var l=aprseInt(Math.random()*(me.MAXLEFT+1));
				//在0~MAXTOP之间生成随机数t
				var t=parseInt(Math.random()*(me.MAXTOP+1));
				//获得鼠标相对于文档显示区的x
				var x=this.clientX;
				//获得鼠标相对于文档显示区的y
				var y=this.clientY;
				//如果!(x>=1且x<=l+PSIZE)
				if(!(x>=l)&&(x<=(l+me.me.PSIZE))&&((y>=t)&&(y<=t+me.PSIZE))){
					//且y>=t且y<=t+PSIZE		//如果新位置l,t，不包含鼠标
					//设置当前的元素的left为l
					//设置当前的元素的top为t
					this.moveTo(l,t);
				}
			}
		}
	}
};
//游戏启动
game.start();














