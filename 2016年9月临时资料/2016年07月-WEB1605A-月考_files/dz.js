//@author dongzheng



	// 获取url中的参数工具方法 add by YHT
	(function($){
			$.getUrlParam = function(name) {
				var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r!=null) return unescape(r[2]); return null;
			}
	})(jQuery);

	// 初始化cookie add by YHT
	function initCookie() {
		
		var userId = $.getUrlParam('userId');
		var examPaperId = $.getUrlParam('examPaperId');
		var examUserId = $.getUrlParam('examUserId');
		if(userId != undefined && userId != null)
			addCookie("userId",userId,3);
		if(examPaperId != undefined && examPaperId != null)
			addCookie("examPaperId",examPaperId,3);
		if(examUserId != undefined && examUserId != null)
			addCookie("examUserId",examUserId,3);
	}
	
	
	
	
//显示剩余时间asa
function checkDate(endTime){
	//得到当前时间
	var currentTime=0;
	$.ajax({
		type:"POST",
		dataType:"json",
		url: remoteUrl+"web/100/exam/getTime",
		async : false,
		data:"",
		success:function(result) {
			currentTime=result.resource;
			//currentTime=result.currentTime;
		}
	});
	//结束时间
	//var endTime=1403165975694;
	//结束时间-当前时间
	var time=endTime-currentTime;
	if(time<0){
		$('.btn').removeAttr("onclick").css("background","#999").css("cursor","auto");
		return;
	}
/*	var userId=getCookie("userId");
	var sessionid=getCookie("sessionid");
	if(userId==null || typeof(userId) == undefined || sessionid==null || typeof(sessionid) == undefined){
		window.location.href=elearningUrl;
		return;
	}*/
	
	var durationTime = parseInt(time/1000);
	var h = parseInt(durationTime/3600);
	var m = parseInt(durationTime%3600/60);
	var s = durationTime%3600%60;
	//lode_state=1;
	time_task=setInterval(
	    function(){
		    if(durationTime>0){
				durationTime--;
				h = parseInt(durationTime/3600);
				m = parseInt(durationTime%3600/60);
				s = durationTime%3600%60;
				var tip = "答题剩余时间"+h+"小时"+m+"分"+s+"秒";
				document.getElementById("time-task").innerHTML=tip;
			}else{
				clearInterval(time_task);
				$('.btn').removeAttr("onclick").css("background","#999").css("cursor","auto");
			}
	},1000); 
}

//恢复答案
function recoverAnswer(){
	var cookieValue=getCookie("answer");
	if(typeof(cookieValue)!="undefined" && cookieValue.length>0){
		var ary=cookieValue.split("|");
		for(var i=0;i<ary.length;i++){
			var idAndValue=ary[i].split(",");
			var input=document.getElementById(idAndValue[0]);
			if(idAndValue[1]=="1"){
				input.checked=true;
			}else{
				input.checked=false;
			}
		}
	}
	
}
//保存答案到cookie
function addAnswerToCookie(){
	var cookieValue="";
	var inputs=document.getElementsByTagName("input");//得到所以input
	for(var i=0;i<inputs.length;i++){
		var input=inputs[i];
		if(input.type=='radio'||input.type=='checkbox'){//如果是单选或多选
			var inputId=input.id;
			if(input.checked){
				cookieValue+=inputId+",1";
			}else{
				cookieValue+=inputId+",0";
			}
			cookieValue+="|";
		}
	}
	if(cookieValue.length>0){
		cookieValue=cookieValue.substring(0,cookieValue.length-1);
	}
	//alert(cookieValue);
	addCookie("answer",cookieValue,3);
}
//获取指定名称的cookie的值
function getCookie(objName){
	//alert(document.cookie);
    var arrStr = document.cookie.split("; ");
    //alert(arrStr);
    for(var i = 0;i < arrStr.length;i ++){
        var temp = arrStr[i].split("=");
        if(temp[0] == objName) return unescape(temp[1]);
   } 
}
//添加cookie
function addCookie(objName,objValue,objHours){      
    var str = objName + "=" + escape(objValue);
    if(objHours > 0){//为时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString() + ";path=/";
   }
   document.cookie = str;

}
//删除cookie
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) {
    	document.cookie= name + "="+cval+";expires="+exp.toGMTString()+ ";path=/";
    }
}
//去掉<xmp></xmp>之间的换行
function updateXmp(){
 	var ary=document.getElementsByTagName("xmp");
 	for(var i=0;i<ary.length;i++){
 		var str=ary[i].innerHTML;
 		if(typeof(str)!="undefined" && str.length>0){
 	 		str=str.replace(/(^\s*)|(\s*$)/g, "");
 	 		ary[i].innerHTML=str;
 		}

 	}
}

//@author hanxianglin
function submitexam(){
	
	var questionArr=new Array();
	var linum=$(".exam_test>ul>li");
	var isFinish=true;
	var notFinishQuestion="";
	for(i=0;i<linum.length;i++){
		var formval="";	//文本框的值
		if(linum.eq(i).find("textarea").length==0){ //判断是否为文本域
				var inputtype="";
				inputtype=linum.eq(i).find("input").eq(0).attr("type");
				switch(inputtype){
					case "radio":
					formval=linum.eq(i).find("input:checked").val();
					break;
				case "checkbox":					
					linum.eq(i).find("input:checked").each(function(j){					
						if(j==0){
							formval=$(this).val();			
							}else{
								formval+=$(this).val();
								}
						});
					break;
				case "text":
					linum.eq(i).find("input").each(function(j){
						if(j==0){
							formval=$(this).val();			
							}else{
								formval+="@#$"+$(this).val();
								}
						});
					break;
				}
			
			}else{
				formval=linum.eq(i).find('textarea').val();	
			}
		
			if(typeof(formval) == "undefined" || formval==""){
				isFinish=false;
				notFinishQuestion=notFinishQuestion+(i+1)+',';
			}
			questionArr[i]={"order":i+1,"result":formval};
		}
		if(isFinish==false){
			if(confirm('您的第'+notFinishQuestion+'题未做答，是否提交？')){
				
			}else{
				return;
			}
		}

		var userId=getCookie("userId");
		var examPaperId=getCookie("examPaperId");
		var examuserId=getCookie("examUserId");
		$.ajax({
			type : "POST",
			url : remoteUrl + "web/"+userId+"/exam/submitExam/"+examPaperId+"/"+examuserId,
			dataType : "json",
			contentType : "application/json",
			data : JSON.stringify(questionArr),
			success : function(data) {
				if(data.status==1){
					alert("提交成功！点击确定退出考试");
					delCookie("answer");
					window.history.back();
					//window.location.href=rootUrl + "index.html";
				}else if(data.status==-1 || data.status==2){
					alert("您已经提交过！点击确定退出考试");
					delCookie("answer");
					window.history.back();
					//window.location.href=rootUrl + "index.html";
				}else{
					alert("提交失败，请稍后重新提交！");
				}
			}
			
		});		
	}
	/**
	 * add by YHT
	 */
	function examnow(){
		var euid = $.getUrlParam('examUserId');
		//var euid = getCookie("examuserId");
		var userId = getCookie("userId");
		if(euid == null || euid == undefined){
			return;
		}
		$.ajax({
			type:"get",
			url:remoteUrl + "web/"+userId+"/exam/updateExamState/"+euid,
			async:true,
			dataType:"json",
			success:function(result){
				
			}
		});
	}