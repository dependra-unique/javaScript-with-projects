let url = "http://universities.hipolabs.com/search?name=";




// let country = "india";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
   
    let country = document.querySelector("input").value;
    console.log(country);

    let collegeArr = await getCollege(country);
    console.log(collegeArr);

    let list = showColl(collegeArr);
   

     
})


function showColl(collegeArr){

    let list = document.querySelector("#list");
    list.innerText = "";
   
    for(college of collegeArr){
        console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
    try{
       
// The code snippet uses the Axios library to make HTTP requests in JavaScript.
        let result = await axios.get(url+country);
        console.log(result);
        return result.data
    }
    catch(err){
        console.log("error: ", err);
        return [];
    }
    
}