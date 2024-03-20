let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{

    let link = await getImg();
    // console.log(link);
    let image = document.querySelector("#image");
    image.setAttribute("src", link);
})





async function getImg(){
    try{
        let result = await axios.get(url);
        console.log(result.data.message);
        return result.data.message;
    }
    catch(err){
        console.log("error: ", err);
    }
   
}
