// console.log("hello world");
// let smallimg = document.getElementsByClassName("ab");

// for(let i = 0; i<smallimg.length; i++){
//     console.dir(smallimg[i].src);

// }


// //Query Selector
// console.dir(document.querySelector("p"));
// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelectorAll("h3"));
// console.dir(document.querySelectorAll("a"));




// let links = document.querySelectorAll(".navbar a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "green";
// }


 


// //Practice question 1
// let para1 = document.createElement("p");
// para1.innerText = "Hey, I'm a red";
// document.querySelector("body").append(para1);
// para1.classList.add("red");



// //Practice question 2
// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3.";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");


// //Practice question 3
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");
// h1.innerText = "hey, I'm a div";
// para2.innerText = "Me too!";
// div.append(h1);
// div.append(para2);
// document.querySelector("body").append(div);

// div.classList.add("box");



// //Question: Create a new input and button element on the page using javaScript only. Set the text of button to "Click me";
// let input = document.createElement("input");
// let btn = document.createElement("button");

// input.placeholder = "Enter the any input";
// btn.innerText = "Click me";

// document.querySelector("body").append(input);
// document.querySelector("body").append(btn);





// //Question: Add following attributes to the element 
// // -Change placeholder value of input to "username".
// // -Change the id of button to "btn".
// input.setAttribute("placeholder", "username");
// btn.setAttribute("id", "btn");




// //Question: Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
// let button = document.querySelector("#btn");
// button.classList.add("btn");



// //Question: Create an h1 element on the page and set its text to "DOM Practice" underlined.Change its color to purple.
// let heading = document.createElement("h1");
// heading.innerText = "DOM Practice";
// document.querySelector("body").append(heading);

// heading.classList.add("heading");
// heading.style.color = "purple"




// //Question: Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.
// let p = document.createElement("p");
// p.innerHTML = "Apana College <b>Delta</b> Practice";
// document.querySelector("body").append(p);





// //DOM Events
// let btns = document.querySelectorAll("button");
// for(let btn of btns){
// //  btn.onclick = greet;
// //  btn.onclick = hello;

//     btn.addEventListener("click", greet);
//     btn.addEventListener("click", hello);
//     btn.addEventListener("dblclick", vector);

// }

// function greet(){
//     alert("Good Day!");
// }

// function hello(){
//     console.log("hello");
// }

// function vector(){
//     alert("Hey, Vector!");
// }


// let greet = ()=>{
//     console.log("meze karo bhai!");
// }

// let btns = document.querySelectorAll("button");
// for(let btn of btns){
//  btn.onclick = greet;
//  btn.onmouseenter = function(){
//     console.log("Hello vector");
//  }

// }
// console.dir(btns);





//Question: Random Color Generator
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h2 = document.querySelector("h2");
//     let randomColor = getRandomColor();
//     h2.innerText = randomColor;
     
//     console.log("Color updated.");
//     let div = document.querySelector("div");
//     div.style.backgroundColor =  randomColor;
//     h2.style.backgroundColor = randomColor;
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }



// let p = document.querySelector("p");
// p.addEventListener("click", function(){

//     console.log("paragraph clicked.");
// });


// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("Cursor inside box.");
// });



// let p = document.querySelector("p");
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let btn = document.querySelector("button");

// function getColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
// };
// btn.addEventListener("click", getColor);
// p.addEventListener("click", getColor);
// h2.addEventListener("click", getColor);
// h3.addEventListener("click", getColor);



// //default event
// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event){
//     console.log(event);
// })




// //Keyboard se koi key enter kari ho vo dikhata hai ye
// let input = document.querySelector("input");
// input.addEventListener("keydown", function(){
//     console.log("Key has been pressed");
// });

// input.addEventListener("keyup", function(event){
//     console.log("Key = ", event.key);
//     console.log("Code = ", event.code);
//     // console.log("Key has been released");

//     if(event.code == "ArrowUp"){
//         console.log("Character moves forward");
//     }
//     else  if(event.code == "ArrowDown"){
//         console.log("Character moves back");
//     }
//     else  if(event.code == "ArrowLeft"){
//         console.log("Character moves left");
//     }
//     else  if(event.code == "ArrowRight"){
//         console.log("Character moves right");
//     }


//     if(event.code == "keyU"){
//         console.log("Character moves up");
//     }
//     else  if(event.code == "keyD"){
//         console.log("Character moves down");
//     }
//     else  if(event.code == "keyL"){
//         console.log("Character moves left");
//     }
//     else  if(event.code == "keyR"){
//         console.log("Character moves right");
//     }
// });





// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     // alert("This is sweet alert.");

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");

    
//     // console.log(this.elements);
//     // console.log(this.elements[0]);

//     let user = this.elements[0];
//     let pass = this.elements[1];


//     // console.dir(input);
//     console.log("username = ", user.value);
//     console.log("password = ", pass.value);

//     alert(`Hi ${user.value}, your password is ${pass.value}`);
// });




// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function(){
//     console.log("change event");
//     console.log("final ans = ", this.value);
// });


// user.addEventListener("input", function(){
//     console.log("Input event");
//     console.log("final ans = ", this.value);
// });



// //keyboard par jo type hua hai vo screen par dikhe
// let input = document.querySelector("#user");
// let p = document.querySelector("p");

// input.addEventListener("input", function(){
//     p.innerText = this.value;
//     console.log(this.value);
// })




// //Question: Create a button on the page using javaScript. Add an event listener to the button that changes the button's color to green when it is clicked.
// let btn = document.createElement("button");
// btn.innerText = "Click me!";
// let body = document.querySelector("body");
// body.append(btn);

// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "green";
//     console.log("color changed");
// });



// //Event Bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }


// //Todo app
// let inp = document.querySelector("#todoInput");
// let btn = document.querySelector("#addtaskBtn");
// let ul = document.querySelector("#todoul");
// btn.addEventListener("click", function(){
//     console.log("button was clicked");
//     let li = document.createElement("li");
//     li.innerText = inp.value;    
//     ul.appendChild(li);
//     let delbutton = document.createElement("button");
//     delbutton.innerText = "delete";
//     delbutton.classList.add("delbtn");
//     li.append(delbutton);
//     // console.log(inp.value);
//     inp.value = "";
// });


// ul.addEventListener("click", function(event){
//     // console.log(event.target.nodeName);
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("delete");
//     }
// });


// let delbuttons = document.querySelectorAll(".delbtn");
// for(let delbutton of delbuttons){
//     delbutton.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
    
// }






















