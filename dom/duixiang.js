function Dog(name,age){
    this.name=name;
    this.age=age;
}
Dog.prototype={
   // name:this.name,
   //  age:this.age,
    eat:function(){
        console.log("哈哈哈");
    }
};
var small =new Dog("xixi","23");
console.log(small.eat());


//es6
class User{
    constructor(name,pass){
        this.name=name;
        this.pass=pass;

    }
    run(){
        console.log("走路");
    }
}
let person=new User("weq","1234");
console.log(person);
console.log(person.run());
//继承
function Vipuser(name,pass,level) {
    User.call(this,name,pass);
    this.level=level;
}
Vipuser.prototype=new User();
Vipuser.prototype.constructor=Vipuser;
var v1=new User('nnn','4567',4);

//es6
console.log(v1);
  class Vipusers extends User{
      constructor(name,pass,level){
          super(name,pass);
          this.level=level;
      }
      eatt(){
          console.log("好吃");
      }
  }
  var ha=new Vipusers('sds','4546',7);
console.log(ha);