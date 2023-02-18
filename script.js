"use strict";

// let testName = "Cavid";
// let newArr = [];
// function reverseStr(name) {
//     for (let i = 0; i < name.length; i++) {
//         newArr.push(name[i]);
//     }    
//     var reversedArr = newArr.reverse();
//     // console.log(reversedArr.join());
//     console.log(reversedArr.toString().replaceAll(",", ""));
// }
// reverseStr(testName);

// let book1 = {
//     id: 1,
//     name: "Aelita",
//     author: "Aleksey Tolstoy"
// }

// let book2 = {
//     id: 2,
//     name: "Peace and War",
//     author: "Dostoevskiy"
// }

// let book3 = {
//     id: 3,
//     name: "White Lilac",
//     author: "Balzac"
// }

// let book4 = {
//     id: 4,
//     name: "Angel and Demon",
//     author: "Dan Brown"
// }

// let book5 = {
//     id: 5,
//     name: "Pride and Projudice",
//     author: "Jane Austin"
// }



// let updatedBook = {
//     id: 2,
//     // name: "NewBook",
//     // author: "NewAuthor"
// }

// let library = {
//     name: "Akhundov",
//     capacity: ,
//     books: [],
//     addBook: function(book){
//         if(this.books.length == this.capacity){
//             console.log("Capacity is already full!");
//             return;
//         }

//         let eachBook = this.books.find(b => b.id == book.id)
//         if(eachBook != undefined){
//             console.log("This book is already exist!");
//             return;
//         }
//         this.books.push(book);
//     },

//     update: function(newBook){
//         for (let i = 0; i < this.books.length; i++) {
//             if(this.books[i].id == newBook.id){
//                 if(newBook.name != undefined){
//                     this.books[i].name = newBook.name;
//                 }else{
//                     this.books[i].name == this.books[i].name;
//                 }
//                 if(newBook.author != undefined){
//                     this.books[i].author = newBook.author;
//                 }else{
//                     this.books[i].author == this.books[i].author;
//                 }
//             }
//         }
//     },

//     delete: function(deletedId){
//         this.books = this.books.filter(item => item.id != deletedId);
//     }, 

//     getBooks: function(){
//         return this.books;
//     }
// }

// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);
// library.addBook(book4);
// console.log(library.getBooks());
// library.update(updatedBook);
// library.delete(2);
// console.log(library.getBooks());

// class Car {
//     constructor(name, speed){
//         this.name = name;
//         this.speed = speed;
//         this.color = "Red";
//     }

//     speedFunc(){
//         console.log(500 + this.speed);
//     }
// }

// let car1 = new Car("KIA", 520);
// console.log(car1.name + " - " + car1.speed + " - " + car1.color);
// car1.speedFunc();

// class BMW extends Car{
//     constructor(brand,color,speed,test){
//         super(color, speed, test);
//         this.test = test;
//         this.brand = brand;
//     }
// }
// let bmw = new BMW("BMW", "Magenta", 800, "tested");
// console.log(bmw.color + " " + bmw.speed + " " + bmw.test);
// bmw.speedFunc(400);

// class Test {
//     static eating(){
//         console.log("ate");
//     }
// }
// Test.eating();

// let numbers = [1,2,3,4,5]
// let str = "Musa";
// let num = 5;
// Array.prototype.greaterNum = function(){
//     return Math.max(...this);
// }
// console.log(numbers.greaterNum());

// String.prototype.findLength = function(){
//     return this.length;
// }
// console.log(str.findLength());

// Number.prototype.findPow = function(){
//     return Math.pow(this, 2);
// }
// console.log(num.findPow());