function inheritObject(o){
    //返回一个纯净地空对象
    function F(){}
    F.prototype = o;
    return new F();
}
//寄生式继承
//声明基对象
var book = {
    name: 'js book',
    alikeBook: ['javascript','css','html']
};
function createBook(obj){
    //通过原型继承方式创建新对象
    var o = new inheritObject(obj);
    //拓展新对象
    o.getName = function(){
        console.log(name);
    };
    //返回扩展后地对象
    return o;
}