var Book = (function(){
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkbook(){};
    //创建类
    function _book(newId,newName,newPrice){
        //私有变量
        var name,price;
        //私有方法
        function checkID(id){
            return id==this.id ? true : false;
        };
        bookNum++;
        if(bookNum>100){
            throw new Error('我们仅出售100本书！');
        }
        if(this instanceof Book){
            //特权方法
            this.getName = function(){
                return this.name;
            };
            this.getPrice = function(){
                return this.price;
            };
            this.setName = function(name){
                this.name = name;
            };
            this.setPrice = function(price){
                this.price = price;
            };
            //公有属性
            this.id = newId;
            //公有方法
            this.copy = function(){
                console.log('copy')
            };
            //构造器
            this.setName(newName);
            this.setPrice(newPrice);
        }else{
            return new Book(newId,newName,newPrice)
        }
    }
    //构造原型
    _book.prototype = {
        //静态公有属性
        isJSBook : false,
        //静态公有方法
        display : function(){
            console.log('display')
        }
    };
    return _book;
})();

//实例化
var book = new Book(10);
console.log(book);
book.setName('javascript');
book.setPrice('56.00');
console.log(book);
// var book = Book(10,'javascript-js',50.65);
// console.log(book);