// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }


// three();



let h1 = document.querySelector("h1");

// // h1.style.color = "red";
// setTimeout(()=>{
//     h1.style.color = "red";
// }, 1000);

// setTimeout(()=>{
//     h1.style.color = "green";
// }, 2000);

// setTimeout(()=>{
//     h1.style.color = "blue";
// }, 3000);

// function changeColor(color, delay, nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextChangeColor){
//             nextChangeColor();
//         }
//     }, delay);
// }



// //callbacks nesting => callback hell(asynchronous ki wajah se ye problem hoti hai)
// changeColor("red", 1000, ()=>{
//     changeColor("yellow", 1000, ()=>{
//         changeColor("pink", 1000, ()=>{
//             changeColor("blue", 1000, ()=>{
//                 changeColor("orange", 1000);
//             });
//         });
//     });
// });



// //Heading color changed using promises
// function changeColor(color, delay){

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
    
//     });
// }

// //heading color chaneg using async & await keyword
// async function demo(){
//    await changeColor("red", 1000);
//    await changeColor("blue", 1000); 
//    await changeColor("yellow", 1000);
//    await changeColor("pink", 1000);
//          changeColor("green", 1000);

// }

// demo();



// changeColor("red", 1000)
//     .then(()=>{
//         console.log("red color complete");
//         return changeColor("green", 1000);
//     })
//     .then(()=>{
//         console.log("green color complete");
//         return changeColor("orange", 1000);
//     })
//     .then(()=>{
//         console.log("orenge color complete");
//         return changeColor("pink", 1000);
//     })
//     .then(()=>{
//         console.log("pink color complete");
//         return changeColor("yellow", 1000);
//     })
//     .then(()=>{
//         console.log("yellow color complete");
//         return changeColor("#00bb55", 1000);
//     })
//     .then(()=>{
//         console.log("lightgreen color complete");
//     })
//     .catch(()=>{
//         console.log("color not completed");
//     })








//Data saved if internet speed > 4
// function saveToDb(data, success, failure){
//     let internetSp = Math.floor(Math.random()*10)+1;
//     if(internetSp > 4){
//         success();

//     }else{
//        failure();
//     }
// }

// //callback nesting = > callback hell
// saveToDb("Dependra", ()=>{
//     console.log("data1 saved");

//     //ydi data1 saved ho chuka hai to data2 save kar do
//    saveToDb("Adarsh",  ()=>{
//     console.log("data2 also saved");

//     //ydi data2 saved ho chuka hai to data3 save kar do
//     saveToDb("Saurav", ()=>{
//         console.log("data3 saved");
//     }, ()=>{
//         console.log("data3 not saved");
//     });
// }, ()=>{
//     console.log("data2 not saved");
// });
// }, ()=>{
//     console.log("data1 not saved");
// });




//promises se code ko aasaan banaya hai
// function saveToDb(data){
    
//     return new Promise((resolve, reject)=>{
//         let internetSp = Math.floor(Math.random()*10)+1;
//         if(internetSp > 4){
//             resolve("data saved");
//         }
//         else{
//             reject("data not saved");
//         }
//     });
// }

// //then() & catch() methods
// let result = saveToDb("dependra");
// result
//     .then(()=>{
//         console.log("data was resolved");
//         console.log(result);
//     })
//     .catch(()=>{
//         console.log("data was rejected");
//         console.log(result);
//     })


//promises chaining
//then() & catch() methods
// let result = saveToDb("dependra");
// result
//     .then(()=>{
//         console.log("data1 saved");
//         return saveToDb("adarsh");
//         // .then(()=>{
//         //     console.log("data2 saved");
//         // })
//         // .catch(()=>{
//         //     console.log("data2 rejected");
//         // })
//     })
//     .then(()=>{
//         console.log("data2 saved");
//         return saveToDb("jyoti");
//     })
//     .then(()=>{
//         console.log("data3 saved");
//     })
//     .catch(()=>{
//         console.log("data was rejected");
       
//     })



// saveToDb("dependra")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log("result : ", result);
//         return saveToDb("adarsh");
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("result : ", result);
//         return saveToDb("jyoti");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("result : ", result);
//     })
//     .catch((error)=>{
//         console.log("data was rejected");
//         console.log("error : ", error);
       
//     })




// //Async keyword
// async function greet(){
//     // abc();
//     // throw "error meze ki hai";
//     return "hello";
// }
// // console.log(greet());

// greet()
//     .then((result)=>{
//         console.log("promise is resolved");
//         console.log("result :", result);
//     })
//     .catch((error)=>{
//         console.log("promise is rejected");
//         console.log("error :", error);
//     })



// // arrow function with async keyword
// let hello = async ()=>{
//     console.log("hello, bhaiya");
//     return 5;
// }
// console.log(hello());



// //Await keyword => await keyword only async keyword se sath use hota hai
// function getNum(){
//     return new Promise((resolve, reject)=>{
//         let num = Math.floor(Math.random()*10)+1;
//         setTimeout(()=>{
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//    await getNum();
//    await getNum();
//    await getNum();
//     getNum();
// }
// console.log(demo());





// //JSON
// //json data(string) into js object
// let jsonData = '{"fact":"Cats have 30 vertebrae (humans have 33 vertebrae during early development; 26 after the sacral and coccygeal regions fuse)","length":122}';

// // console.log(jsonData);
// let validData = JSON.parse(jsonData);
// console.log(validData);
// console.log(validData.fact);


// //js object into json data(string)
// let student = {
//     name: "dependra",
//     class: "b.tech",
//     branch: "IT",
//     college: "ABESIT"
// };

// let toJsonData = JSON.stringify(student);
// console.log(toJsonData);
// // console.log(toJsonData.name);  //not access because it is string.




//Axios =>sending headers
let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } 
    catch(e){
        console.log("error = ", e);
    }
    
}
console.log(getFacts());





















































































