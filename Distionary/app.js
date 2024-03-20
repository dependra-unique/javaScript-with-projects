let url = "https://api.dictionaryapi.dev/api/v2/entries/en/digital";


let btn = document.querySelector("button")
btn.addEventListener("click", async () => {
    let word = document.querySelector("input").value

    let wordMeaningArr = await distionary()
    let list = document.querySelector("#list")
    list.innerText = ""

    console.log(wordMeaningArr);
    let i = 0
    for(let WordMeaning of wordMeaningArr){
       
        // console.log(WordMeaning.definitions)
        let definitionsArr = WordMeaning.definitions

        
        let li = document.createElement("li")
        li.innerHTML = wordMeaningArr[i].partOfSpeech
        li.style.color = "red"
        list.appendChild(li) 

        for(let definitionObj of definitionsArr){

            // console.log(definitionObj.definition);
            let li = document.createElement("li")
            li.innerText = definitionObj.definition
            list.appendChild(li) 
        }



        i = 1
        li = document.createElement("li")
        li.innerHTML = wordMeaningArr[i].partOfSpeech
        li.style.color = "red"
        list.appendChild(li) 
        
        // for(let i = 0; i<wordMeaningArr.length; i++){
        //     console.log(wordMeaningArr[i].partOfSpeech);
        //     let li = document.createElement("li")
        //     li.innerHTML = wordMeaningArr[i].partOfSpeech
        //     li.style.color = "red"
        //     list.appendChild(li) 
        // }
        
        // while(){
        //     console.log(wordMeaningArr[i].partOfSpeech);
        //     let li = document.createElement("li")
        //     li.innerHTML = wordMeaningArr[i].partOfSpeech
        //     li.style.color = "red"
        //     list.appendChild(li) 
        // }
        
              
    }
    




})





async function distionary(){
    try{
        let result = await axios.get(url);
        // console.log(result.data[0].meanings);
        return result.data[0].meanings;
    }
    catch(err){
        console.log("error: ", err);
        return [];
    }
}
