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
console.log(str.substring(0,2));//----------"01" 
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

  console.log(~~4.85)//4 取整
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

/* 字符串转代码 */

eval("var a=3;var b=4; console.log(a+b)");//7

/* 过滤无效数组成员 */
const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])  // [ 1, 2, 3, 'a', 's', 34 ]

var a=0,b=2;//逗号操作符，可一次定义多个变量
++a;//一元操作符（只能操作一个值）
console.log(!false)//true 布尔操作符（包括 ！非 &&与 和 ||或）
console.log(a>b)//false 关系操作符比较值（包括>,<,<=,>=）
console.log(a==b)//false 相等操作符（包括==，！= ，===）
a += 10;//相当于 a=a+10 赋值操作符（包括 +=，/=,%=,-=等）

var arr=["a","b","c"],a=0;
if (arr.length==3) {//调用Boolean()把条件语句转换为布尔值
    alert("数组arr有3个成员")
} else {
    alert("数组arr没有有3个成员")
}
do{//只要条件不成立 循环会一直执行下去
 a += 2;
}while(a<10){//成立后执行
    console.log(a)//10
}
var b=0;
while(b<10){//只要条件不成立 循环会一直执行下去
    b += 2;
    console.log(b)//2 4 6 8 10
}
for(var i=0;i<arr.length;i++){
    if(i==2){
        break;//循环切断不再继续
    }
    console.log(arr[i])//a b
}
for(var index in arr){
    if(index==1){
        continue;//循环中断一次 然后继续
    }
    console.log(arr[index])//a c
}
var text = "c"
switch(text){
 case "a":
 console.log("值为a时做什么什么");
 break;
 case "c" :
 console.log("值为c时做什么什么");
 break;
}
var item={
    a:"w",
    b:"c"
};
with(item){
    var w = a;
    var c = b;
}
// var w = item.a;
// var c = item.b;

function text(num){
    return num+100;
    console.log("永远不会被调用")
}
function text(num){
    return num+200;
}
console.log(text(100))//300 

var obj1=new Object();
var obj2=obj1;
obj1.name="对象名";
console.log(obj2.name)//对象名

function text(num){
    num.name="赋值";
}
// var num1=new Object();
text(num1);
console.log(num1.name);//"赋值"

var num=0;
function text(){
    if(num==0){
        var color='red';
    }
    return color;
}
var color1=text();
console.log(num,color,color1)//0,'red','red' 

var str = "abacdefag";
var patt1 = /a/g;
var patt2 = new RegExp("a","g")
console.log(str.match(patt1))//[ 'a', 'a', 'a' ]
console.log(str.match(patt2))//[ 'a', 'a', 'a' ]


// arguments 对象只能在函数内使用
function test(a){
    console.log(a,Object.prototype.toString.call(arguments));
    console.log(arguments[0],arguments[1]);
    console.log(typeof arguments[0]);
}
test(1);

var obj={
    name:"zhangxing",
    age:'18',
    showAge:function(){ 
        console.log(this.age);//18 this.age相当于obj.age
    }
}
Object.defineProperty(obj,"name",{
    configurable:true,
    enumerable:true,
    writable:true,
    value:"zhangxing"
})


function text(name,age,score){
    this.name =name
    // this.name = ;
    this.age = age;
    this.score = score;
    console.log(this.name)
}
var text1=text("张星","18","100");//张星
var text2=text("大星","19","100");//大星
console.log(this.name)



function test(){}
test.prototype.name="zhangxing";
test.prototype.age="18";
test.prototype.getAge=function(){
    console.log(this.age)//18
};
var text1 = new test();
text1.name = "new"
console.log(text1.name)
console.log(test.prototype.name)




function test1(){}
test1.prototype = new test();
test.prototype.score="100";
test.prototype.getScore=function(){
    console.log(this.score);
};

function test(num){
    if(num<0){
        return num;
    }else{
        return num+test(num);
    }
}

function test() {
    let item = 0; 
    function A() {
        var b = 2;
        console.log(b+(++item)); // 2
    }
    A()
    // console.log(b)// b is not defined  
}
test()

try{
    try { 
        if(x == "")  {
            console.log("aaaa")
        }
        console.log("aaaa")
        console.log("aaaa")
        console.log("aaaa")
        console.log("aaaa")

        //throw "为空";//执行代码除错
    }
    catch(err) {
        throw new Error("aaas") ;
        //console.log("" + err);//出错时执行
    }
}
catch(err) {
   console.log("sss" + err);//出错时执行
}


<div id="parent">
　　<div id="child" class="child"></div>
</div>

document.getElementById("parent").addEventListener("click",function(e){
    alert("parent事件被触发，"+this.id,false);
})
document.getElementById("child").addEventListener("click",function(e){
    alert("child事件被触发，"+this.id,false)
})
//parent事件被触发，parent
//child事件被触发，child


try {
    console.log(rrr)
} catch (error) {
    console.log("报错了",error)
}
/* 垃圾回收机制 */
var arr=['aa',"ddd"]
function test(){
    let i = arr;
    i.push("ddd");
    var j=i;
    console.log(j)
}
/* 引用类型对象指向改变 */
var person=new Object();
function test(obj){
    obj.name ="dddd";
    console.log(obj.name);
    obj = new Object();
    obj.name = "ccc";
    console.log(obj.name);
}
test(person);
// console.log(person.name)

/* 作用域 */
var k = 7;
function test(){
    var i = 9;
    function test1(){
        var j =10;
        console.log(k,i,j)//7 9 10
    }
    test1();
    // console.log(k,i,j)//7 9  j is not defined
}
test();
console.log(k,i,j)//7 i,j is not defined

/*  */
var person ={}
Object.defineProperty(person,"name",{
    writable:false,
    value:"ddd"
})
console.log(person.name);
person.name="ccc"

function getUrlParam(sUrl, sKey) {
       var r=/(\?|&)(\w+)\=(\w+)/g;
       var res={};
    // console.log("xxx",r.exec(sUrl))
       while(r.exec(sUrl)!=null){
        console.log("xxx",res[RegExp.$2],RegExp)
           if(res[RegExp.$2]){
               var temp=res[RegExp.$2];
               res[RegExp.$2]=[].concat(temp,RegExp.$3)
           }else{
               res[RegExp.$2]=RegExp.$3;
           }
       }
       if(sKey) {
        
    // console.log("ccc",sKey,res[sKey])
           return res[sKey]||'';
       }
       return res;
    }
getUrlParam("https://www.baidu.com/s?ie=utf&f=8&rsvbp=1&rsvidx=1&tn=baidu","rsvidx")