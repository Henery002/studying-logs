var elearnRemote="http://www.tmooc.cn/tmooc";
var remoteUrl="http://qsserver.tmooc.cn/qsserver/";
//var remoteUrl="http://192.168.177.21/qsserver/";

var rootUrl=remoteUrl +"/web/";
var elearningUrl = elearnRemote+"/web/login.html";
var elearningIndex = elearnRemote+"/web/login.html";

function num_to_str2(code) {
    var str_out = "";
    if (code != "") {
    	str_out = unescape(code);
    }
    return str_out;
}
function pageImmediatelyExit() {
	window.opener=null;
	window.close();
	
}

function main_getLoginUserFromCookie(){
	var sessionid = $.cookie("sessionid");
	if( sessionid == null || sessionid.length<1 ) return null ;
	var user = new Object() ;
	var str = new Array();
	str = sessionid.split("|");
	//session.getId()+"|"+user.getLogin_name()+"|"+user.getName()+"|"+user.getIs_tts()+"|"+user.getOutDays()
	user.sessionid = str[0] ;
	user.loginname=str[1];
	user.name = str[2];
	user.istts= str[3];
	user.outdays = str[4] ;
	return user ;
}