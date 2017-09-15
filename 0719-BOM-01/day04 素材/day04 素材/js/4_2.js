//1、
function calc(){
	//获得当前时间now
	var now=new Date();
	//获得h
	var h=now.getHours();
	h>=12&&(h-=12);
	//获得m
	var m=now.getMinutes();
	//获得s
	var s=now.getSeconds();
	//计算hDeg
	var hDeg=360*(h*3600+m*60+s)/(3600*12);
	//计算mDeg
	var mDeg=360*m/60;
	//计算sDeg
	var sDeg=360*s/60;
	//在id为clock下找id属性不以id开头的div,保存在divs中
	var divs=document.querySelectorAll('div:not([id^='a'])');
	//设置divs中第一个div的transform属性为 rotate(hDeg deg)
	divs[0].style.transform='rotate('hdeg+')';
	//设置divs中第二个div的transform属性为 rotate(mDeg deg)
	divs[1].style.transform='rotate('mdeg+')';
	//设置divs中第三个div的transform属性为 rotate(sDeg deg)
	divs[2].style.transform='rotate('sdeg+')';
}