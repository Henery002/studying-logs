function getFocus(txt){
	//设置txt的class为txt_focus
	txt.className='txt_focus';
	//清除txt的父元素的下一个兄弟元素的第一个孩子元素的class。(='')
	txt.parentNode
		.nextElementSibling
		.firstElementChild
		.class='';
}
function valiName(txtName){	//存名称或姓名的文本框
	//定义正则reg：1~10个\w
	var reg=/^\w{1,10}$/;
	return vali(txtName,reg);
}
//代码重构：
//代码重构：
//代码重构：
function vali(txt,reg){
	//清除txt的class
	txt.className='';
	//用reg验证txtPwd的内容，保存在r中
	var r=reg.test(txt.value);	//返回布尔值
	//找到txt旁边的div
	var div=txt.parentNode
				.nextElementSibling
				.firstElementChild;
	//给div穿衣服
	div.className=r?"vali_success":"vali_fail";
		//如果r是true，
			//验证通过，给div穿vali_success
		//否则
			//给div穿vali_fail
	return r;
	
}
function valiPwd(txtPwd){
	//定义正则reg:6为数字
	var reg=/^\d{6}$/;
	return vali(txtPwd,reg);
}
		//表单：该例？？？？？？？？？？