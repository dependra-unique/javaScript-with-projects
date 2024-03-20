// console.log("Hello world");
// console.log("hello");
// let a=2;
// let b = 5;
// //console.log("Sum is : ", a+b);

// let pencilPrice =10;
// let eraserPrice = 5;

// console.log("Total price is : ", pencilPrice+eraserPrice, "rupees");

// // Template leteral
// let output = `Total price is : ${pencilPrice+eraserPrice} rupees `; //back ticks
// console.log(output);


// truthy & falsy
// if(true){
//     console.log("This is true value");

// }
// else{
//     console.log("Thdis is false value");
    
// }

// if(23){
//     console.log("This is true value");

// }
// else{
//     console.log("Thdis is false value");
    
// }



// Alert $ Prompt

// alert("Something goes wrong!");
// console.log("This is something ");


// let name = prompt("Enter any number..");
// alert(name);87
// if(name == "Dependra"){
//     alert(name);
// }
// else{
//     alert("Something Wrong!");
// }


// let name = prompt("Enter first name..");
// let name1 = prompt("Enter second name..");
// if(name == "dependra" || name1 == "kumar"){
//     alert(name);
//     alert(name1);
// }
// else{
//     alert("Kuch to hai");
// }




// Error & Warn
// console.error("Something is error.");
// console.warn("This is warn msg.");



// //Question 1
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// let output = `${name} is ${age} years old`;
// console.log(output);


// //Question 2
// let str = "apples";
// if('A'==str[0] || 'a'===str[0]|| str.length>5){
//     console.log("it is good");
// }
// else{
//     console.log("It is not good");
// }



// // Trim Method
// let str = "   Hello  ";
// console.log(str.trim());
// console.log(str);


// let password = prompt("Enter password");
// console.log(password.trim());
// console.log(password);
  

// let str = "    dependra";

// let out = "apple";
// console.log(out);
// out = str.trim();

// console.log(out);

 

// // toUpperCase() & toLowercase method

// let str = "Dependra kumar";

// console.log(str.toUpperCase());
// console.log(str);
// console.log(str.toLowerCase());


// indexOf(arg)  method
// let str = "ILoveCoding";
// console.log(str.indexOf("Love"));
// console.log(str.indexOf("I"));
// console.log(str.indexOf("X"));


// // Method chaining 
// let str = "   I am hero  ";
// console.log(str.trim().toUpperCase());


// //replace method
// let str = "ILoveCoding";
// // console.log(str.replace("Love", "do"));
// // console.log(str.replace("I", "You"));
// console.log(str.replace("C oding", "College"));


// // //Array

// let arr = ["aman", "dependra", "rahul"];
// console.log(arr);
// console.log(arr[0]);
// arr[0]= "Jyoti";
// console.log(arr);
// console.log(arr.length);
// arr[10] = "aman";
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr);


// //Array Method
// let cars = ["audi", "porche", "rolles roice"];
// console.log(cars);
// cars.push("ferari");
// console.log(cars);
// console.log(cars.length);

// cars.pop();
// console.log(cars);

// cars.unshift("bugatti");      // starting mein add karta hai
// console.log(cars);

// cars.shift();                // starting se delete karta hai
// console.log(cars);

// console.log(cars.indexOf("audi"));


// console.log(cars.indexOf("xuv"));

// console.log(cars.includes("porche"));

// console.log(cars.includes("bugatti"));


// console.log(cars.reverse());

// let fruits = ["apple", "banana", "mango"];

// // cars.concat(fruits);
// console.log(cars.concat(fruits));


 
// console.log(cars.slice());

// console.log(cars.slice(2));

// console.log(cars.slice(2, 4));

// console.log(cars.slice(-2));

// console.log(cars.slice(6));


// //splice(start, deleteCount, add Item0.....itemN) method
let colors = ["red", "pink", "blue", "grey", "green"];
// console.log(colors);
// console.log(colors.splice(3));
// console.log(colors);

// console.log(colors.splice(1, 2));
// console.log(colors);

// console.log(colors.splice(3, 0,"black", "orange"));
// console.log(colors);

// console.log(colors.splice(1, 1, "yellow"));
// console.log(colors);



// //sort() method
// let colors = ["red", "blue", "grey", "yellow" ];
// console.log(colors.sort());

// let alpha = ['z', 'x', 'y', 'b', 'c', 'a'];
// console.log(alpha.sort());

// let numbers = [122, 34, 67, 8, 9, 54, 45];
// console.log(numbers.sort());   // sort method numbers par sahi se work nhi karta because sort function phle numbers ko  string mein convert karta hai tab sorting operation perform karta hai



// //Question 2
// let start = ["january", "july", "march", "august"];
// console.log(start.splice(0, 2, "july", "june"));
// console.log(start);


// //Question 3
// let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

// console.log(lang.reverse().indexOf("javascript"));


// //Array References
// let arr = ['a,', 'b', 'c'];
// let arrCopy = arr;
// console.log(arr);
// console.log(arrCopy);

// console.log(arrCopy.push('d'));
// console.log(arr);
// console.log(arrCopy);

// console.log(arr.pop());
// console.log(arr);
// console.log(arrCopy);


// if(arr == arrCopy){
//     console.log("References of two arrays are same");
// }
// else{
//     console.log("References are not same");
// }


// // Question 
// let arr = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];

// console.log(arr);


// //Question
// let arr = [7, 9, 0, -2];
// arr.shift();
// console.log(arr);


// //Question
// let str = "    ";
// let output = str.trim();
// if(output === ""){
//     console.log("string is blank");

// }
// else{
//     console.log("string is not blank");
// }


// //Question
// let arr2 = [2, 4, 5, 6];
// if(arr2[0]){
//     console.log("Element exist");
// }
// else{
//     console.log("Element not exist");
// }


// //Question
// let index = 3;
// let arr3 = ['a,', 'D', 'Y', 'b', 'Z'];
// if(arr3[3]>=97){
//     console.log("Lower hai");

// }
// else{
//     console.log("Upper hai");
// }

// let a, B;
// if(a>B){
//     console.log("badi ahi");
// }
// else{
//     console.log("choti hai");
// }



//Favorate Movie

// const favMovie = "3 idot";
// let gess = prompt("Enter my favorate movie");

// while((favMovie != gess) && (gess != "quit")){
   
//     gess = prompt("Wrong!, Please try again");
// }
// if(favMovie == gess){
//     console.log("congratulation !");
// }
// else{
//     console.log("You quit.");
// }




// //for of loop

// let fruits = ["mango", "banana", "apple", "orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }


// let name ="Dependra Kumar";
// for(char of name){
//     console.log(char);
// }


// let heros = [["superman", "batman"], ["spiderman", "ironman"]];
// for(list of heros){
//     for(hero of list){
//         console.log(hero);
//     }
//     // console.log(list);
// }



// //To Do App

// let todo = [];
// let req = prompt("Please , Enter your request.");
// while(true){

//     if (req == "quit") {
        
//         console.log("You quit from todo");
//         break;
//     }
//     else if(req == "list"){
//         console.log("------------------");
//         for(let i = 0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("------------------");

//     }
//     else if(req == "add"){
//         let addItem = prompt("Please, Enter your item to be added in todo");
//         todo.push(addItem);
//         console.log("Item added.");
//     }
//     else if(req == "delete"){
//         let index = prompt("Please, Enter index to be deleted item from todo");
//         todo.splice(index, 1);
//         console.log("Item deleted.");
//     }
//     else{
//         console.log("Wrong request.");
//     }

//     req = prompt("Please , Enter your request.");

// }



// //Question: remove accurance of num
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]== num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);



// //Question: number length find
// let number = 287152;
// let num = number.toString();
// let count = num.length;

// // for(let i =0; i<num.length; i++){
// //     count++;
// // }
// console.log(count);



// //Question: digit sum
// let number = 287;
// let sum = 0;
// let copy = number;
// while(copy>0){
//    let rem = copy%10;
//    sum = sum+rem;
//    copy = Math.floor(copy/10);
// }
// console.log(sum);


// //Question: factorial
// let n = 5;
// let fact = 1;
// for(let i =1; i<=n; i++){
//     fact = fact*i;
// }
// console.log(fact);



// //Question: largest number
// let arr = [23, 54, 111, 56, 98, 431];
// let max = arr[0];
// for(let i =1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);



// //Object leteral
// const student = {
//     name : "Dependra",
//     age : 23,
//     marks : 95
// };

// console.log(student);
// console.log(student.age);

// let item = {
//     price : 100.00,
//     color : ["red", "pink"],
//     discount : 50
// };

// console.log(item.color);


// //Question : Creating a post
// const post = {
//     username: "@dependrajoya",
//     content: "IIT trichi best college of India",
//     likes: 1500,
//     dislikes: 1,
//     reposts: 55,
//     tags: ["@tiwarighaziabad", "@delta", "@shiradha"]
// };
// console.log(post);


// const student = {
//     name : "Dependra",
//     age: 19,
//     marks: 95,
//     city: "BUlandshahr"
// };
// //update
// console.log(student);
// student.city = "Ghaziabad";
// console.log(student.city);
// console.log(student);

// //update
// student.age = "twenty";
// console.log(student);

// //add key value pair
// student.favorate = "barger";
// console.log(student);



// //Object of Objects
// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     shiradha: {
//         grade: "A++",
//         city: "PUne"
//     },
//     dependra: {
//         grade: "A",
//         city: "Bulandshahr"
//     }

// };
// console.log(classInfo);
// console.log(classInfo.aman.city);  


// //Array of Objects
// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "delhi"
//     },
//     {
//         name: "shradha", 
//         grade: "A++", 
//         city: "pune"
//     },
//     {
//         name: "Dependra", 
//         grade: "A",
//         city: "bulandshahr"
//     }

// ];

// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);

// console.log(classInfo[2].name);
// console.log(classInfo[2].city);

// classInfo[2].city = "Ghaziabad";
// console.log(classInfo[2].city);
// console.log(classInfo[2]);

// classInfo[2].gender = "Male";
// console.log(classInfo[2].name);
// console.log(classInfo[2]);


// // Math object
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-12));
// console.log(Math.abs(5.5));
// console.log(Math.pow(2, 5));
// console.log(Math.floor(5.6));
// console.log(Math.floor(5.9999999999));
// console.log(Math.ceil(6.3));
// console.log(Math.ceil(-2.1));
// console.log(Math.random());


// //Random Integer  from 1 to 10
// let num = Math.random();
// num = num*10;
// num = num+1;
// console.log(Math.floor(num));

// //One line code random number generate from 1 to 10
// console.log((Math.floor(Math.random()*10))+1)

// //From 1 to 100
// console.log((Math.floor(Math.random()*100))+1)

// //From 1 to 5
// console.log((Math.floor(Math.random()*5))+1)


// //From 50 to 100
// console.log((Math.floor(Math.random()*50))+50)



// //`Guessing Game
// //User enter a max number & then tries to guess a random generated number between 1 to max.
// const maxNo = prompt("Enter max number:");
// const random = Math.floor(Math.random()*maxNo)+1;
// let guess = prompt(`Please guess any number from 1 to ${maxNo}`);


// while(true){
//     if(guess == "quit"){
//         console.log("You quit");
//         break;
//     }
//     else if(guess == random){
//         console.log(`Congratulation!, guess number is right ..${guess}`);
//         break;

//     }
//     else if(guess > random){
//         guess = prompt("Hint: guess number is too large, please try again");
//     }
//     else if(guess < random){
//         guess = prompt("Hint: guess number is too small, please try again");
//     }

// }


// //Question: Create a program that generate a random number representing a dice roll [the number should be between 1 to 6]
// const max = 6;
// const random = Math.floor(Math.random()*max)+1;
// console.log(`${random} is random number`);



// //Question: Create an object representing a car that stores following properties for the car: name, model, color. print the car's name
// const car = {
//     name: "bugatti",
//     model: 2021,
//     color: "light black"
// };

// console.log(car.name);




// // Question: create an object person with their name , age and city.Edit thier city's original value to change it to "New York". Add a new country and set it to the United states.
// const person = {
//     name: "Dependra Kumar",
//     age: 19,
//     city: "Bulandshahr"

// };

// console.log(person);

// person.city = "New York";
// console.log(person.city)
// console.log(person);

// person.country = "United States";
// console.log(person.country);
// console.log(person);



//  //Function in JS
//  function hello() {
//     console.log("hello");

//  }
//  hello();
//  hello();
//  hello();



// //Question: concatination all string in an array
// let arr = ["apple", "mango", "banana", "orange", "litchi"];
// function stringConcate(arr) {
//     let str = "";
//     for(let i = 0; i<arr.length; i++){
//         str = str + arr[i];
//     }
    
//     return str;
// }

// let ans = stringConcate(arr);
// console.log(ans);



// //Function expression
// let print = function(){
//     console.log("hello");

// }
// print();

// const sum = function(a, b){
//     return a+b;
// }
// console.log(sum(2, 4));

// //we can update the value of function like variables
// print = function(){
//     console.log("nameste");
// }
// print();



// //Higher order function
// function multiplegreet(func, n) {
//     for(let i=1; i<=n; i++){
//         func();
//     }

// }

// let greet = function(){
//     console.log("hello");
// }
// multiplegreet(greet, 5);



// //Question: Detect even and odd number
// function oddEvenTest(request){

//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong request");
//     }
// }

// let request = "even";
// let func = oddEvenTest(request);
// console.log(func(3));



// //Methods in js
// const calculator = {
//     add: function(a, b){
//             return a+b;
//     },
//     sub: function(a, b){
//             return a-b;
//     }, 
//     mul: function(a, b){
//             return a*b;
//     },
//     div: function(a, b){
//             return a/b;
//     }
// };

// console.log(calculator.add(2, 4));
// console.log(calculator.mul(2, 4));
// console.log(calculator.sub(2, 4));
// console.log(calculator.div(5, 4));



// //Method(shorthand)
// const calculator = {
//     add(a, b){
//         return a+b;
//     },
//     sub(a, b){
//         return a-b;
//     },
//     mul(a, b){
//         return a*b;
//     },
//     div(a, b){
//         return a/b;
//     }
// };

// console.log(calculator.add(4, 5));
// console.log(calculator.sub(5, 4));
// console.log(calculator.mul(3, 4));
// console.log(calculator.div(8, 4));



// //Question: write a javaScript function that return array elements larger then a number
// let arr = [2, 4, 6, 9, 8, 7, 4, 3];
// let num = 5;
// function getElement(arr, num){

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }

// }
// console.log(getElement(arr, num));



// //Question: Write a javaScript function to extract unique character from a string.
// let str = "abcdabcdefgggh";
// function getUnique(str){
//     let ans = "";
//     for(let i=0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             //ans string mein current character ka index hi nhi hai , current character ko add kar lo ans string mein
//             ans = ans + currChar;
//         }
//     }
//     return ans;
// }
// let ans = getUnique(str);
// console.log(ans);



// //Question: Write a javaScript function that accept a list of country names as input and return the longest country name as output.
// let countryCount = prompt("How many countries add you want");
// let arr = [];
// //add country name in array
// while(countryCount !=0 ){
//     let name = prompt("Enter country name");
//     arr.push(name);

//     countryCount--;
// }
// //store length of all string in arr2 array
// let arr2= [];
// for(let i=0; i<arr.length; i++){
//     let currName = arr[i];
//     let leng = currName.length;
//     arr2.push(leng);
// }
// //find maximum length of arr2 array
// let max = arr2[0];
// for(let i=1; i<arr2.length; i++){
//     if(arr2[i]>max){
//         max = arr2[i];
//     }
// }
// // find index of maximum length of string
// let indexMax = arr2.indexOf(max);

// //print string of maximum length
// console.log("Longest country name is :");
// console.log(arr[indexMax]);




// //Write a javaScript function to count the number of vowel in  a string argument.
// let str = "jagejidfoklugn";
// let count =0;
// function countVowel(str){
//     for(let i=0; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowel(str));



// //this keyword
// const student = {
//     name: "dependra", 
//     age: 19, 
//     math: 89,
//     phy: 99, 
//     eng:88,
//     getAvg(){
//         console.log(this);
//         let avg = (this.math+this.phy+this.eng)/3;
//         console.log(avg);
//     }
// }
// console.log(student);
// console.log(this);
// console.log(student.getAvg());



// //try & catch
// try{
//     console.log(a);
// } catch{
//     console.log("Variable a is not defined");
// }

// try{
//     console.log(a+b);
// } catch(err){
//     console.log(err);
//     console.log("variables a and b are not defined");
// }



// //Arrow function
// const sum = (a, b)=> {
//     return a+b;
// };
// console.log(sum(4, 3));

// const cube =(n)=> {
//     return n*n*n;
// };
// console.log(cube(6));

// const avg =(a, b, c)=>{
//     return (a+b+c)/3;
// };
// console.log(avg(1, 2, 3));


// //implicit return
// const mul =(a, b)=>(a*b);
// console.log(mul(2, 4));

// const rem =(a, b)=>(a%b);
// console.log(rem(5, 4));



//  //setTimeout function
// console.log("hi there!");
// setTimeout(()=>{
//     console.log("Welcom vector DPI");
// }, 4000);

// console.log("Welcome to");
// console.log("Welcome to");
// // console.log("Welcome to");
// console.log("Welcome to");



// //setInterval function
// //ye infinite chalta rhega ese stop karne ke lia eski id store karani padegi and id ko clearInterval(id) mein pass karni pedegi
// console.log("hi there!");
// let id = setInterval(()=>{
//     console.log("Hello nasa");
// }, 2000);
// console.log(id);


// // let marks = 9
// //this with arrow function
// const student = {
//     name: "Dependra",
//     age: 19,
//     marks: 99,
//     prop: this,   //window object, global scope
//     getName: function() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: ()=>{
//         console.log(this);  //parent's scope =>window object
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout(()=>{
//             console.log(this);  //student object
//         }, 2000);
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);   //window object
//         }, 2000);
//     }

// };
// console.log(student.marks);
// console.log(student.prop); 
// console.log(student.getName());
// console.log(student.getMarks());
// console.log(student.getInfo1());
// console.log(student.getInfo2());



// //Question: Write an arrow function that returns the square os a number 'n'.
// const square = (n)=>(n*n);
// console.log(square(2));


// //Question: Write a function that print "Hello World" 5 times at intervals of 2s each.
// let id = setInterval(()=>{console.log("Hello world")}, 2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear Interval runs.");
// }, 10000);




// //Question: Write an arrow function named arrayAverage that accept an array of numbers and returns the average of those numbers.
// let arr = [10, 13, 14, 15];
// const arrayAverage = (arr)=>{
//     let n = arr.length;
//     let totalSum = 0
//     for(let num of arr){
//         totalSum+=num;
//     }
//     return totalSum/n;
// }
// console.log(arrayAverage(arr));



// //Question: Write an arrow function named isEven() that takes a single number as argument and return if it is even or not.
// let num = 1004;
// const isEven = (num)=>{
//     if(num%2==0){
//         return `${num} is even.`;
//     }else{
//         return `${num} is not even.`;
//     }
// }
// console.log(isEven(num));



// const object = {
//     messege: "Hello World",

//     logMessege(){
//         console.log(this.messege);
//     }
// };
// setTimeout(object.logMessege(), 1000);



// let length = 4;
// function callback(){
//     console.log(this.length);
// }
// // console.log(callback());

// const object = {
//     length: 5,
//     method(callback){
//         callback();
//     },
// };

// console.log(object.method(callback, 1, 2));



// //Array methods
// //1. forEach()
// let arr = [1, 2, 3, 4, 5];
// function print(element){
//     console.log(element);
// };
// console.log(arr.forEach(print));

// //arrow function use
// let arr2 = [6, 7, 8, 9];
// arr2.forEach((element)=>{
//     console.log(element);
// });

// //normal function use
// let arr3 = [11, 12, 13, 14, 15];
// arr3.forEach(function(element){
//     console.log(element);
// })


// // We can use forEach() function for array methods
// let arr = [{
//     name: "Dependra",
//     marks: 98
// },
// {
//     name:"aman",
//     marks: 99
// },
// {
//     name: "shiradha",
//     marks: 97
// }];

// console.log(arr.forEach((student)=>{
//     console.log(student);
//     console.log(student.name);
//     console.log(student.marks);
// }))


// // map() function 
// //array ki copy bana sekte hai
// let arr2 = [1, 2, 3, 4];
// let double = arr2.map((el)=>{
//     return el*2;
// });
// console.log(double);

// let arraySquare = arr2.map((el)=>{
//     return el*el;
// });
// console.log(arraySquare);

// let gpa = arr.map((el)=>{
//     return el.marks/10;
// });
// console.log(gpa);



// //filter() function
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((num)=>{
//     return (num%2==0);   //even number ka array return karaga
// });
// console.log(newArr);
// // console.log(arr);

// let newArr1 = arr.filter((num)=>{
//     return (num%2!=0);   //odd number ka array return karaga
// });
// console.log(newArr1);

// let newArr2 = arr.filter((num)=>{
//     return num>3;   //3 se bade element wala array return karaga
// });
// console.log(newArr2);




// //every function
// [2, 4, 6].every((el)=>(el%2==0)); // true
// [2, 4, 1].every((el)=>(el%2==0)); // false
// [1, 5, 3].every((el)=>(el%2!=0)); // true


// //some function
// [1, 2, 3, 4].some((el)=>(el%2==0)); //true
// [1, 3].some((el)=>(el%2==0));   // false



// //reduce function
// let arr = [1, 2, 3, 4, 5];
// let finalSol = arr.reduce((res, el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log("final solution is", finalSol);



// //use reduce method to find maxi in an array
// let arr = [2, 4, 7, 12, 1, 3];
// let result = arr.reduce((max, el)=>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(result);


// //Question: check if all numbers in our array are multiples of 10 or not.
// let arr = [10, 20, 30, 100, 1000, 5000, 450];
// let ans = arr.every((el)=>(el%10==0));
// console.log(ans);


// //Question: create a function to find min number in an arry.
// function getMin(arr){
//     let min = arr.reduce((min, el)=>{
//         if(min>el){
//             return el;
//         }
//         else{
//             return min;
//         }
//     });
//     return min;
// }
// let arr2 = [32, 23, 6 , 12, 66, 23];
// console.log(getMin(arr2));



// //spread
// let arr = [1, 2, 3, 4, 6, 7, 8, 9, 4, 3, 2];
// console.log(...arr);
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// let str = "Dependra kumar";
// console.log(...str);



// //spread with Array Literals
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);
// newArr.push(-1);
// console.log(newArr);
// console.log(arr);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let newAr = [...odd, ...even];
// let newAr1 = [...even, ...odd];
// console.log(newAr);
// console.log(newAr1);


// // //spread with object literals
// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };
// let dataCopy = {...data, id:123};  //data ki copy with add id
// console.log(dataCopy);
// console.log(data);

// //Convert array into object
// let arr = [1, 2, 3, 4, 5];
// let obj1 = {...arr};
// let obj2 = {...arr, id:112};
// console.log(obj1);
// console.log(obj2);



// //Convert string into object
// let str = "hello";
// let obj3 = {...str};
// let obj4 = {...str, id:112};
// console.log(obj3);
// console.log(obj4);


// //Rest
// function printArgs(...args){  //kitne bhi arguments pass kar sekte hai function mein
//     //arguments
//     for(let i = 0; i<args.length; i++){
//         console.log("You gaves us", args[i]);
//     }
// };
// console.log(printArgs(1, 2, 3, 4, 5));

// function min(a, b, c, d){
//     console.log(arguments);
// };
// console.log(min(1, 2, 3, 4));


// function sum(...args){
//     return args.reduce((add, el)=>(add+el));
// };
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));



// //Destructuring
// let names = ["tony", "mahindra", "rishi", "rahul", "adarsh", "saurav"];

// // let winner = names[0];
// // let runnerup = names[1];
// // let looser = names[2];

// let [winner, runnerup, looser, ...others] = names;  //others rest wala concept use kar raha hai
// console.log(winner);
// console.log(runnerup);
// console.log(looser);
// console.log(others);



// //Destructuring with object
// let student = {
//     name: "karan",
//     age: 19,
//     class: "12",
//     subject: ["math", "science", "physics", "computer", "english", "chemistry"],
//     username: "karan123",
//     password: 1234,
//     city : "pune"
// };

// let user = student.username;
// let pass = student.password;
// console.log(user);
// console.log(pass);

// let {username, password} = student;
// console.log(username);
// console.log(password);

// // key ko access karke, key ki value another variable mein store 
// const {username: user, password: pass, city: place="mumbai"} = student;
// console.log(user);
// console.log(pass);
// console.log(username);   //can't access using key when variables are defined
// console.log(place);



// //Question: Square and sum the array elements using the arrow function and then find the average of the array.
// let arr = [1, 2, 3, 4];
// let square = arr.map((num)=>{
//     return num*num;
// });
// console.log(square);

// let sum = arr.reduce((sum, el)=>{
//     return sum+el;
// });
// console.log(sum);

// let avg = sum/arr.length;
// console.log(avg);



// //Question: Create a new array using the map function whose each element is equal to original element plus 5.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((num)=>{
//     return num+5;
// });
// console.log(newArr);



// //Question: Create a new array whose elements are in uppercase of words present in the original array.
// let name = ["adarsh", "dependra", "apala", "aushi", "saurav"];
// let newArr = name.map((name)=>{
//     return name.toUpperCase();
// });
// console.log(newArr);



// //Question: Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the addditional arguments doubled.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const doubleAndReturnArgs = (arr, ...args)=>[
//     ...arr,
//     ...args.map((v)=>(v*2)),
// ];

// console.log(doubleAndReturnArgs(arr, 4, 4));
// console.log(doubleAndReturnArgs(arr, 0, 2, 2, 2, 3, 4, 4, 4, 4));



// //Question: Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of first object and second object.
// const student = {
//     name: "dependra",
//     age: 19,
//     class: "b.tech",
//     city: "bulandshahr"
// };

// const subject = {
//     1: "math",
//     2: "science",
//     3: "english",
//     4: "hindi"
// };
// function mergeObject(student, subject){

//     console.log(student);
//     console.log(subject);
//     return {...student, ...subject};

// };
// console.log(mergeObject(student, subject));



 









