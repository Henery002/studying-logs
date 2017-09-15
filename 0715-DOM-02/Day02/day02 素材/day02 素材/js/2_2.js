//保存所有未选中国家的数组
var unselCts=[];
//保存 已选中的国家
//当页面加载后
	//将id为unsel的元素的内容去开头结尾的空格后，掐头去尾，在切割（正则），保存到unselcts中
	//debugger;
var selCts=[];
window.onload=function(){
	unselCts=unsel.innerHTML.trim().slice(8,-9).split(/<\/option>\s*<option>/);
	//debugger;
}
function move(btn){
	//判断btn的内容
	switch(btn.innerHTML){
		case "&gt;&gt;":
		//如果是>>，
			//将unselcts的内容拼接到selcts上（concat）,再默认排序,再保存回selcts
			selCts=selCts.concat(unselCts).sort();
			//unselcts清空（把其length改为0）
			unselCts.length=0;
			break;
		//如果是<<，
		case "&lt;&lt;":
			//将selcts的内容拼接到unselcts上（concat），再默认排序,再保存回unselcts
			unselCts=unselCts.concat(selCts).sort();
			//selcts清空（把其length改为0）
			selCts.length=0;
			break;
		//如果是>
		case "&gt;":
			//获得id为unsel下的所有option，保存在opts
			var opts=unsel.querySelectorAll('#unsel option');
			//从后向前遍历opts中每个option
			for(var i=opts.length-1;i>=0;i--){
				//如果当前opt是选中的，（selected='true'）
				if(opts[i].selected){
					//删除unselCts中相同位置的一个元素，再将删除的元素拼接到selCts中，在默认排序，在保存回selCts中
					selCts=unselCts.splice(i,1).concat(selCts).sort();
					//debugger;
				}
			}
			break;
		//如果是<
		case "&lt;":
			//获得id为sel下的所有option，保存在opts
			var opts=sel.querySelectorAll('#sel option');
			//从后向前遍历opts中每个option
			for(var i=opts.length-1;i>=0;i--){
				//如果当前opt是选中的，（selected='true'）
				if(opts[i].selected){
					//删除selCts中相同位置的一个元素，再将删除的元素拼接到unselCts中，在默认排序，在保存回unselCts中
					unselCts=selCts.splice(i,1).concat(unselCts).sort();
				}
			}
			break;
		}
		//如果遍历时，可能删除数组，都要从后向前删除。
		//如果遍历时，可能删除数组，都要从后向前删除。
		//如果遍历时，可能删除数组，都要从后向前删除。
		//如果遍历时，可能删除数组，都要从后向前删除。
	upDateView(unsel,unselCts);
	upDateView(sel,selCts);
}
//将数组内容刷新到页面上去
function upDateView(sel,cts){	//将sel数组的cts元素刷到页面
	//如果cts的length是0
	//将cts按option标签拼接为字符串，前加头后加尾，将结果直接赋值给（保存）sel的内容中。
	sel.innerHTML="<option>"+cts.join('</option><option>')+'</option>';
}