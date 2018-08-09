// var array=[1,2,2,3,4,5];
// var j=0;
// var array2=[];
// for(var i=0;i<array.length;i++){
//     if(array[i]!==2){
//         array2[j++]=array[i];
//     }
// }
// console.log(array2);
// var array=[1,2,2,3,4,5,3,2];
// for(var i = 0; i < array.length; i++){
//     if(array[i] === 2){
//         array.splice(i,1);
//         i--;
//     }
// }
// console.log(array);
// var tmp = new Date();
// console.log(tmp);
//
// function f() {
//     var tmp;
//
//     if (true) {
//          //tmp = 'aaa';
//          console.log(tmp);
//     }
//     console.log(tmp);
// }
// f();
// var a = 1;
// var a = 2;
// console.log(a);
// let x=1;
// let y=2;
// [x,y]=[y,x];
// console.log(x,y);
// function example(){
//     return [1,2,3];
// }
// let[a,b,c]=example();
// function example(){
//     return {
//         foo:1,
//         bar:2
//     };
// }
// let { foo,bar}=example();
// const map = new Map();
// map.set('first', 'hello');
//  for (let [key, value] of map) {
//     console.log(key + " is " + value);
// }map.set('second', 'world');
//
//
// // first is hello
// // second is world
// const arr=[1,2,3];
// let arr1;
// arr1=arr.map(function(x){
//     return x*x;
// });
// function aaa(){
//     return {
//         test:1
//     };
// }
// console.log(typeof  aaa());
// var person={
//     name:`xiao`,
//     age:12,
//     eat:function(){
//         console.log("可以吃");
//     },
//     run:function(){
//         console.log("可以跑");
//     }
//
// };
// for(var key in person){
//     console.log(person[key]);
// }
// function Dog(option){
//     this._init(option);
//
// }
// Dog.prototype= {
//     _init:function(option) {
//         this.name = option.name;
//         this.age = option.age;
//         this.sex = option.sex;
//      },
//     eat: function () {
//         console.log("吃吃吃");
//     },
//     run: function () {
//         console.log("【跑跑跑");
//     }
// };
// var ss=new Dog({name:'sha',age:"12",sex:"23"});
// var bb=new Dog({name:'dahaung',age:"15",sex:"20"});
// console.log(ss);
// console.log(bb);
// console.log(ss.eat()=== bb.eat());
//
// var numbers=[1,2,3,4,5,4,3,2,1];
// var s1=numbers.filter(function(item,index,numbers){
//     console.log(index);
//     return (item<3);
// });
// console.log(s1);
//
// var s="123abc";
//
// console.log(s.split('').reverse().join(''));
//  console.log(s.split().reverse());
const arr = [1,[2,[3],4],5];
function flatten(arr) {
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            console.log(arr[i]);
            console.log(arr.splice(i, 1, ...flatten(arr[i])));
        }
    }
    return arr;
}
flatten(arr);
// console.log(flatten(arr));
// var arr=[1,[4,5,[2]],3];
// var shu1=[];
// function shu(arr,shu1) {
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             shu(arr[i],shu1);
//           }
//           else {
//             shu1.push(arr[i]);
//         }
//     }
//     return shu1;
// }
// shu(arr,shu1);
//  console.log(shu1);
// function parseArr(arr,res){
//     var i=0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i] instanceof Array){
//             parseArr(arr[i],res);
//         }else{
//             res.push(arr[i]);
//         }
//     }
// }
// var a=[1,[2,[3,4]],5,6];
// var res=[];
// parseArr(a,res);
// console.log(res);

// const a = [1, 2, 5, 9, 10];
// const b = [3, 4, 6, 9, 10];
//
// function findElement (a, b) {
//     let i = j = 0
//     while (i < a.length || j < b.length) {
//         if (a[i] === b[j]) {
//             return a[i]
//         } else if (a[i] > b[j]) {
//             j ++
//         } else if (a[i] < b[j]) {
//             i ++
//         }
//     }
//     return null
// }
//
// console.log(findElement(a, b));
// function getRandom(istart,iend) {//列出需要被选中的数据
//     var a1 = [];
//     for (var i = 0; i < 91; i++) {
//         a1[i] = i + 10;
//     }
//     //挑选出随机数据
//     var a2 = [];
//     for (var j = 0; j < 10; j++) {
//         a2.push(a1.splice(Math.floor(Math.random() * a1.length), 1));
//         a2.sort();
//         console.log(a2);
//     }
// }
//     getRandom(10,100);
// console.log((true + false) > 2 + true);