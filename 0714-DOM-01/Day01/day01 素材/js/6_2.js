//当页面加载后，
window.onload=function(){
	/*奇数行变色*/
	//找到id为data的table
	//找到table下的tbody
	//找到tbody下的所有tr，保存在变量trs中
	//遍历trs中 的每个tr
		//如果i是偶数
			//设置当前tr的样式的background为#fdf;
	var table=document.getElementById('data');
	var tbody=table.getElementsByTagName('tbody')[0];
	var trs=tbody.getElementsByTagName('tr');
	for(var i=0,len=trs.length;i<len;i++){
		(i%2==0)&&(trs[i].style.background='#fdf');
	}

}
	/*购物车：*/
function calc(btn){	//btn->this->button
	/*数量变化*/
	//如果btn的内容是-
		//找下一个兄弟元素保存在span
	//否则
		//找前一个兄弟元素保存在span中
	//取出span的内容转为整数保存在变量n中
	//设置span的内容为：
		//如果btn的内容是+,就设置为++n
		//否则，如果n等于1，就设置为1
		//否则，设置为--n
	var span=(btn.innerHTML)=='-'?btn.nextElementSibling:
								   btn.previousElementSibling;
	var n=parseInt(span.innerHTML);
	span.innerHTML=((btn.innerHTML=='+')?++n:n==1?n=1:--n);

	/*小计*/
	//找到btn的父元素的前一个兄弟元素的内容,截取第二个字符后的剩余内容，转为浮点数，保存在变量price中
	//找到btn的父元素的后一个兄弟元素的内容，直接设置其内容为&yen; + sub保留2位小数的结果（toFixed(2)）
	var price=parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
	var sub=price*n;
	var price=btn.parentNode.nextElementSibling.innerHTML='&yen;'+sub.toFixed(2);

	/*总计*/
	//在id为data的元素下找tbody
	//找到tbody下所有td，保存在变量tds中，
	//从3开始，每隔4个遍历一次td
		//取出当前td 的内容，去掉￥,转为浮点数，直接累加到sum上
	//遍历结束
	//在id为data的元素下找tfoot，
	//再在tfoot下找所有td，取下标为1的td，保存
	//设置td的内容为￥+sum保留两位小数
/*
	var tbody=data.getElementsByTagName('tbody')[0];
	var tds=tbody.getElementsByTagName('td');
	for(var i=3,sum=0,len=tds.length;i<len;i+=4){
		//var sum+=parseFloat(td.innerHTML.slice(1));
	}
	var tfoot=data.getElementsByTagName('tfoot')[0];

	var td=tfoot.getElementsByTagName('td')[1];
	td='￥'+sum.toFixed(2);
*/
//法二：用Selector API查找
	var tds=document.querySelectorAll('tbody td:last-child');
	for(var i=0,sum=0;i<tds.length;i++){
		sum+=parseFloat(tds[i].innerHTML.slice(1));
	}
	document.querySelector('tfoot td:last-child').innerHTML='&yen;'+sum.toFixed(2);
}

			//此例OK


















