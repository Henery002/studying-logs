//法一：遍历
//1、定义函数，仅遍历直接子节点		--递归方法
function getChildren(parent){
	//概述：输出parent的:nodeName、nodeValue如果parent不是文本节点，就输出nodeName，否则输出nodeValue
	//console.log(parent.nodeType!=3?parent.nodeName:parent.nodeValue);
	//获得parent的直接子节点，保存在变量children中
	//遍历children中的每个节点对象
		//输出：如果当前节点不是文本节点，就输出nodeName，否则输出nodeValue
	var children = parent.childNodes;
	//var children = parent.children;
	for(var i=0,len=children.length;i<len;i++){
		//对每个子节点，执行和父节点完全相同的操作
		arguments.callee(children[i]);
	}
}
//法二：使用遍历API遍历子节点	--循环方法
function getChildren2(parent){
	//1、创建nodeIrerator对象
	//2、反复调用nextNode
	var iterator=
		//document.createNodeIterator(
		document.createTreeWalker(
			parent,NodeFilter.SHOW_ALL,
			null,false
		);
	var node;
	while((node=iterator.nextNode())!=null){
		console.log(node.nodeType!=3?node.nodeName:node.nodeValue)
	}
}
//当前页面加载后
window.onload=function(){
	//记录开始时间
	console.time("iterator1");	//计时器1，名字
	//遍历body下的所有子节点
	for(var i=0;i<10000;i++)
		getChildren(document.body);
	//用截止时间-开始时间，输出时间差
	console.timeEnd("iterator1");

	//记录开始时间
	console.time("iterator2");	//计时器2，名字
	//遍历body下的所有子节点
	//for(var i=0;i<10000;i++)
		getChildren2(document.body);
	//用截止时间-开始时间，输出时间差
	console.timeEnd("iterator2");		//结果证明，循环方法效率高
}