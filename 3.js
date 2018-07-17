//通过闭包实现类的静态变量
var Book = (function(){
    //静态私有变量
    var booknum = 0;
    function checkName(name){
        console.log(name);
    };
    //返回构造函数
    return function(newId,newName,newPrice){
        //私有变量
        var name,price;
        //私有方法
        function checkID(id){
            return this.id===id ? true : false;
        };
        //特权方法
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(name){
            this.name = name;
        };
        this.setPrice = function(price){
            this.price = price;
        };
        //公有属性
        this.id = newId;
        //公有方法
        this.copy = function(){};
        booknum++;
        if(booknum>100)
            throw new Error('我们仅出版100本书！');
        this.setName(name);
        this.setPrice(price);
    }
})();

Book.prototype = {
    //静态公有属性
    isJSBook : false,
    //静态公有方法
    display :function(){
        console.log('display');
    }
}