//周期性定时器
var adv={
	DISTANCE:0,	//用来保存总距离
	DURATION:1000,	//总时间
	STEPS:100,	//总步数
	interval:0,	//步频
	step:0,		//步长
	timer:null,	//定时器序号
	WAIT:5000,	//再次上移的等待时间
	init:function(){
		//获得id为msg的元素的计算后的样式中的bottom,转为浮点数，*-1，保存在DISTANCE
		this.DISTANCE=parseFloat(getComputedStyle(msg).bottom)*(-1);
		//计算interval:DURATION/STEPS
		this.interval=this.DURATION/this.STEPS;
		//计算step:DISTANCE/STEPS
		this.step=this.DISTANCE/this.STEPS;
	},
	moveUp:function(){	//启动上移 this -> adv
		//启动周期性定时器，任务为：moveUpStep，提前绑定this为？，时间间隔为interval,将序号保存在timer中
		//var me=this;
		this.timer=setInterval(this.moveUpStep.bind(this),this.interval);
	},
	moveUpStep:function(){	//上移1步
		//获取id为msg的元素计算后的样式中的bottom,转为浮点数保存在bottom
		var bottom=parseFloat(getComputedStyle(msg).bottom);
		if(bottom<0){
			//设置msg的bottom为bottom+step
			msg.style.bottom=bottom+this.step+'px';
		}else{
			clearInterval(this.timer);
			this.timer=null;	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		}
	},
	moveDown:function(){	//启动下移
		//如果timer是null，	//防止动画叠加
		//if(){
			
		//}
		this.timer=setInterval(this.moveDownStep.bind(this),this.interval);
	},
	moveDownStep:function(){	//下移1步
		var bottom=parseFloat(getComputedStyle(msg).bottom);
		if(bottom>-this.DISTANCE){
			//设置msg的bottom为bottom+step
			msg.style.bottom=bottom-this.step+'px';
		}else{
			clearInterval(this.timer);
			//this.timer=null;
			//启动一次性定时器，任务moveUp,提前绑定this为当前对象。等待WAIT毫秒，将序号保存到timer
			this.timer=setTimeout(this.moveUp.bind(this),this.WAIT);
			//一次性定时器结束后，主动清除timer
			this.timer=null;
		}
	}

};
adv.init();
adv.moveUp();
