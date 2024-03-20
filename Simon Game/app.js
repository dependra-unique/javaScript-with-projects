let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0; 
// let highsrc = 0;

let btns = ["yellow", "purple", "green", "red"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
    }
    levelUp();
    
})

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp(){
    userSeq = [];    // userseq reset  
    level++;
    // highsrc++;
   
    h2.innerText = `level ${level}`;

    //random color select
    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`); 

    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(index){
    // console.log("curr ans :", level);
   
    if(userSeq[index] == gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        // console.log("same value");
    }else{
       
        h2.innerHTML = `Highest Score: ${highsrc-1} <br/>Game Over! <em>Your score was ${level-1} </em><br/>Press any key to start`;

        //kuch galat hone par red background color of body
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();
    }



}



function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);


    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};


function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}


// function getHighSrc(highsrc, level){
//     if(highsrc<level){
//         return level;
//     }else{
//         return highsrc;
//     }
//     return highsrc;
// }

