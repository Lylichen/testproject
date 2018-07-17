//构造器
var Book = function(id,name,price){
    //私有属性
    var num = 1;
    //私有方法
    function checkId(){
        console.log('checkId');
    };
    //特权方法
    this.getName = function(){
        console.log('---getName');
        return this.name;
    };
    this.getPrice = function(){
        console.log('----getPrice')
        return this.price;
    };
    this.setName = function(n){
        this.name = n;
    };
    this.setPrice = function(p){
        this.price = p;
    };
    //对象公有属性
    this.id = id;
    //对象公有方法
    this.copy = function(){};
    //构造器
    this.setName(name);
    this.setPrice(price);
}
//对象不能访问
Book.isChinese = true;
//对象不能访问
Book.resetTime = function(){
    console.log('reset Time')
}
Book.prototype = {
    //公有属性
    isJSBook : true,
    //工友方法
    display : function(){
        var str = '书名：'+this.name+' 编号：'+this.id+' 价格：'+this.price;
        return str;
    }
}
var book = new Book(10,'javascript',56.00);
console.log(book.num);
console.log(book.id);
console.log(book.getName());
console.log(book.getPrice());
console.log(book.isChinese);
console.log(book.isJSBook);
console.log(book.display());
Book.resetTime()
console.log(Book.isChinese);

