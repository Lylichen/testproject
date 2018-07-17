//将优点为我所用 —— 组合继承
//声明父类
function SuperClass(name){
    //值类型共有属性
    this.name = name;
    //引用类型共有属性
    this.books = ['javascript','html','css'];
}
//父类原型共有方法
SuperClass.prototype.getName = function(){
    console.log(this.name);
};
//声明子类
function SubClass(name,time){
    //构造函数式继承父类name属性
    console.log("precall------");
    console.log(this);
    SuperClass.call(this,name);
    console.log("called------");
    console.log(this);
    //子类中新增共有属性
    this.time = time;
}
//类式继承  子类原型继承父类
SubClass.prototype = new SuperClass();
//子类原型方法
SubClass.prototype.getTime = function(){
    console.log(this.time)
}

//测试代码
console.log(SubClass.prototype);
var instance1 = new SubClass('javascript',2018);
var instance2 = new SubClass('html',2018);
instance2.books.push('jquery');
console.log("preinstance-----");
console.log(instance1.__proto__);
console.log(instance2.__proto__);
console.log("instanced-----");
console.log(SubClass.prototype);

console.log(instance1.books);
console.log(instance2.books);
instance1.getTime();
instance1.getName();
instance2.getTime();
instance2.getName();
