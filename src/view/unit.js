function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 3000);
    });
    return p;            
}
// /* Promise中all同时触发如上3个函数 */
// Promise
// .all([runAsync1(), runAsync2(), runAsync3()])
// .then(function(results){
//     console.log(results);
// }

/* 星级评论 */
function star(){
var rate=2;
var s = "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
console.log(s);
}
/* 垃圾回收（闭包自增） */
const times = ((times = 0)=> () => times++)
console.log(
  times(),
  times(),
  times(),
  times()
) // 0，1，2，3
/* 函数参数应用 */
function Sing()
{
with(arguments.callee)
console.log(author +':' + poem);
};
Sing.author = '“李白”';
Sing.poem = '“汉家秦地月，流影照明妃。一上玉关道，天涯去不归”';
Sing();
Sing.author = '“李战”';
Sing.poem = '“日出汉家天，月落阴山前。女儿琵琶怨，已唱三千年”';
Sing();
/* 字符串截取 */
var str = "0123456789";// 
alert(str.substring(0));//------------"0123456789" 
alert(str.substring(5));//------------"56789" 
alert(str.substring(10));//-----------"" 
alert(str.substring(12));//-----------"" 
alert(str.substring(-5));//-----------"0123456789" 
alert(str.substring(-10));//----------"0123456789" 
alert(str.substring(-12));//----------"0123456789" 
alert(str.substring(0,5));//----------"01234" 
alert(str.substring(0,10));//---------"0123456789" 
alert(str.substring(0,12));//---------"0123456789" 
alert(str.substring(2,0));//----------"01" 
alert(str.substring(2,2));//----------"" 
alert(str.substring(2,5));//----------"234" 
alert(str.substring(2,12));//---------"23456789" 
alert(str.substring(2,-2));//---------"01" 
alert(str.substring(-1,5));//---------"01234" 
alert(str.substring(-1,-5));//--------"" 
alert(str.substr(0));//---------------"0123456789" 
alert(str.substr(5));//---------------"56789" 
alert(str.substr(10));//--------------"" 
alert(str.substr(12));//--------------"" 
alert(str.substr(-5));//--------------"0123456789" 
alert(str.substr(-10));//-------------"0123456789" 
alert(str.substr(-12));//-------------"0123456789" 
alert(str.substr(0,5));//-------------"01234" 
alert(str.substr(0,10));//------------"0123456789" 
alert(str.substr(0,12));//------------"0123456789" 
alert(str.substr(2,0));//-------------"" 
alert(str.substr(2,2));//-------------"23" 
alert(str.substr(2,5));//-------------"23456" 
alert(str.substr(2,12));//------------"23456789" 
alert(str.substr(2,-2));//------------"" 
alert(str.substr(-1,5));//------------"01234" 
alert(str.substr(-1,-5));//-----------"" 