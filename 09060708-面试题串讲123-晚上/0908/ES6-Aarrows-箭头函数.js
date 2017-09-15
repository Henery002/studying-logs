/**
 * Created by Administrator on 2016/09/08.
 */
//TODO 箭头函数：对回调函数的简化写法
//      目的：打开回调函数的作用域，让回调函数和外层函数公用一个作用域。
var evens = [2,4,6,8,10];
var odds = evens.map(val => val+1);
/*
 var odds = evens.map(function(val){
    return val + 1;
 });
 */
console.log(odds);

evens.sort(function(a,b){return b-a;});     //法一
evens.sort((a,b) => b-a});                   //法二
console.log(evens);

var bob = {
    _name:"Bob",
    _friends:[
        "Amy","Cinne","Lucy"
    ],
    /*
    getFriends:function(){
        this._friends.forEach(function(){
            console.log(this._name+" 认识 "+val);
        }.bind(this));          //绑定this
    }
     */
     getFriends:function(){
         this._friends.forEach(val => {
            console.log(this._name+" 认识 "+val);
         });          //绑定this
     }
}
bob.getFriends();
