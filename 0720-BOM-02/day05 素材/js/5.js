function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\w{1,10}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\d{6}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}

//为document中第一个form绑定submit事件为
	document.forms[0].addEventListener(
		'submit',function(e){
		//查找当前form中name为userName的元素，保存在变量txtName中
		//var txtName=document.querySelector('[name='userName']');
		//调用valiName,传入textName参数，将返回值保存在rName
		var rName=valiName(this.userName);
		//查找当前form中name为pwd的元素，保存在变量txtPwd
			
		//调用valiPwd,传入textPwd参数，将返回值保存在rPwd
		var rPwd=validPwd(this.Pwd);
		//如果rName和rPwd不都为true，
		if(!(rName&&rPwd)){
			//取消事件
			e.preventDefault();
			}
		}
	);
				//本例 ？？？？