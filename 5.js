//子类的原型对象 —— 继承(类式继承)
//声明父类
function SuperClass(){
    this.supervalue = true;
    this.books = ['javascript','html','css'];
}
//为父类添加公有方法
SuperClass.prototype.getSuperValue = function(){
    return this.supervalue;
};
//声明子类
function SubClass(){
    this.subvalue = false; 
}
//继承父类
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubvalue = function(){
    return this.subvalue;
};
var instance = new SubClass();
var instance1 = new SubClass();
console.log(instance.getSubvalue());
console.log(instance.getSuperValue())
console.log(instance.books);
//给子类实例更改某个属性，会影响到子类的另一个实例
instance1.books.push('设计模式');
console.log(instance.books);
