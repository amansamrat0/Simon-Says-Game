let gameseq =[];
let userseq =[];
let start = false;
let level =0;
let colors = [ "red" ,"yellow" , "green" , "purple"];
let h2= document.querySelector("h2");
let buttons = document.querySelectorAll('div[type="button"]');
let body = document.querySelector("body");

// console.dir(buttons);

document.addEventListener("keypress" , function (){
    if(!start){
        console.log("game started");
        start = true;
        levelup();
    } 
});



function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    } , 300);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    } , 300);
}


function levelup(){
    level++;
    h2.textContent = "level " + level;
    let ranind = Math.floor(Math.random() *4);
    gameseq.push(buttons[ranind].id);
    gameflash(buttons[ranind]);

    //console.dir(buttons[ranind]);

    // console.dir(h2);
    // console.log("level up");
    // console.log("level: " + level);
}

checkanswer  = function (index){
    if(gameseq[index]=== userseq[index]){
        console.log("success");
        if(userseq.length=== gameseq.length){
            setTimeout(function(){
                userseq = [];
                levelup();
            } , 1000);
        }
    }else{
        h2.textContent = "game over!! press any key to start";
        console.log("wrong");
        body.classList.add("game-over");
        setTimeout(function(){
            body.classList.remove("game-over");
        } , 1000);
        start = false;
        level =0;
        gameseq =[];
    }
}

function btnpress(){
    if(start){
    let btn = this;
    userflash(btn);
    userseq.push(btn.id);

    checkanswer(userseq.length -1);


    // console.log(userseq);
    // console.log(gameseq);

    // console.log("button pressed");
    // console.log(this);
    }
}


for(let btn of buttons){
    btn.addEventListener("click" , btnpress);
}

