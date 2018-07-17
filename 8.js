//洁净的继承者 —— 原型式继承
//声明一个过渡函数对象
function inheritObject(o){
    function F(){}
    //过渡对象的原型继承父对象
    F.prototype = o;
    return new F();
}

var book = {
    name: "js book",
    alikeBook: ['javascript','css','html']
};
var newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.display = function(){
    console.log('display--');
    console.log(this);
};
newBook.alikeBook.push('xml book');

var otherBook = inheritObject(book);
otherBook.name = "flash book";
otherBook.display = function(){
    console.log('display--');
    console.log(this);
};
otherBook.alikeBook.push("flash book");

console.log(newBook.name);
console.log(newBook.alikeBook);
console.log(newBook.display());
console.log(otherBook.name);
console.log(otherBook.alikeBook);