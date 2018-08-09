



let a=[2,32,1,3,45,2];
 console.log(a.sort((a, b) => b-a));
 let arr1=[1,2,3];
 let arr2=[4,5,6];
 let arr3=[...arr1,...arr2];
 console.log(arr3);


 //map 映射
 let s=[1,2,4,8,9];
 let result=s.map((item=>item*2));
 console.log(result);
 //reduce 汇总
 let sum=[1,1,1,1,1];
 let sum1=sum.reduce((tmp,item,index)=>{
     if(index!=sum.length-1){
      return tmp+item;
     }else {
         return (tmp + item)/sum.length;
     }
     });
 console.log(sum1);
 //filter 过滤器
 let ss=[1,3,2,6,9,34];
 let ss1=ss.filter(item=>item%3==0);
 console.log(ss1);


 //forEach
 let t =[1,2,3,4,5];
 let t1=t.forEach(item=>{console.log(item);});
 // console.log(t1);



 //startsWith
 let str="sfdfdfdsaf";
 if(str.startsWith('sfdjgh')){
     console.log("好");
 }

 //ends With
 // var m=[];
 // var n=10;
 // if(n>=0){
 //     m.push(--n);
 // }
 // console.log(m);
