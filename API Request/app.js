// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((response)=>{
        
//         return response.json();
//     })
//     .then((data1)=>{
//         // console.log(data);
//         console.log("data1 = ", data1.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2 = ", data2.fact);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })  



// //api request using async & await
// async function getFacts(){
//    try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//    } 
//    catch(error){
//     console.log(error);
//    }
// }
// console.log(getFacts());



//api request using axios method
async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res);
        console.log(res.data.fact);
    }
    catch(e){
        console.log("error: ", e);
    }
   
}
console.log(getFacts());








