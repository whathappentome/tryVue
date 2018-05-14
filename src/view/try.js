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
/* Promise中all同时触发如上3个函数 */
Promise
.all([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
}
/* 星级评论 */
var rate=2;
var s = "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
console.log(s);

const arr = [ {id: 1, score: 1}, {id: 2, score: 2}, {id: 3, score: 4}];
//更新的值
const newValue = {id: 3, score: 3}
const result = arr.map(x => x.id === newValue.id ? newValue : x); //
const updated = arr.map(function(item){
    return item.id == newValue.id ? newValue : item ;
});
　console.log(updated) // => [ { id: 1, score: 1 }, { id: 2, score: 2 }, { id: 3, score: 3 } ]