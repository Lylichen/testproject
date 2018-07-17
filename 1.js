//创建一个类
var Book = function(id, bookname,price){
    this.id = id;
    this.bookname = bookname;
    this.price = price;
}
console.log(Book.bookname)
Book.prototype = {
    display:function(){
        console.log(this.bookname)
    }
}
var book = new Book(10,'javascript',50);
console.log(book.bookname);
book.display();