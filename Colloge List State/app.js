let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let inputVal = document.querySelector("input").value;
    console.log(inputVal);

    let collegeArr =await getCollege(inputVal);

    let list = document.querySelector("#list");
    list.innerText = "";
    for(college of collegeArr){
        // console.log(college.name);

        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
})

async function getCollege(inputVal){
    let college = await axios.get(url+inputVal);
    // console.log(college.data);
    return college.data;
}





