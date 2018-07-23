/* 异步Promise */
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
/* vue双向绑定实现 */
var Book = {}
var name = '';
Object.defineProperty(Book, 'name', {
  set: function (value) {
    name = value;
    console.log('你取了一个书名叫做' + value);
  },
  get: function () {
    return '《' + name + '》'
  }
})
 
Book.name = 'vue权威指南';  // 你取了一个书名叫做vue权威指南
console.log(Book.name);  // 《vue权威指南》·
/* 数组去重 */
/* indexOf输出重复内容的第一次出现的地方 */
var a=[1,1,'1','2',1]
for (let list in a){
    // console.log(a.indexOf(a[list]))//[0,0,2,3,0]
}
function unique(arr) {
    /* filter过滤识别数组每个内容 */
    return arr.filter(function(ele,index,array)
    {   
        // console.log(ele,index,array.indexOf(ele),array)
        return array.indexOf(ele)===index;
    })
}
console.log(unique(a))//[1, 2, "1"]
var a=[1,1,'1','2',1]
function unique(arr) {
    var obj={} 
    return arr.filter(function(item,index,array){ 
        console.log(obj.hasOwnProperty(typeof item+item)?false:(obj[typeof item+item]=true) )
        if(obj.hasOwnProperty(typeof item+item)?false:(obj[typeof item+item]=true))
        {
            console.log(item)
            return item; 
        }
          
    })
}
console.log(unique(a))//[1, 2, "1"]

/* 数组求和reduce累加器 */

var sum = [0, 1, 2, 3].reduce(function (a, b) {
    console.log(a,b)//a为之前求和的积，b为下一个要求和的数组的值
    return a + b;
  }, 0);
  // sum is 6
  console.log(sum)

  /* ~~双排位法取整 */

  console.log(~~4.45)//4 取整
  console.log(Math.round(4.6))//5 四舍五入

  /* 对象合并 */

  var obj={
      a:1,
      b:2
  }
  Object.assign({a:2,c:3},obj);
  console.log(obj);//{a:1,b:2,c:3}

  /* map函数 */
  var myMap=new Map();
        //相当于java的map.put();
        myMap.set(1,"a");
        myMap.set(2,"b");
        myMap.set(3,"c");
         //相当于java 中的：map.size()
        console.log("size="+myMap.size);
        console.log(myMap.get(1));
        console.log(myMap.get(2));
        console.log(myMap.get(3));
/* else-if的优化写法 */
function showGrace(grace) {
    let graceForLevel=[700,650,600,550];
    let levelText=['信用极好','信用优秀','信用良好','信用中等','信用较差'];
    for(let i=0;i<graceForLevel.length;i++){
        if(grace>=graceForLevel[i]){
            return levelText[i];
        }
    }
    //如果不存在，那么就是分数很低，返回最后一个
    return levelText[levelText.length-1];
}
console.log(showGrace(500));//信用较差