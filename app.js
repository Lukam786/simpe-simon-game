let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btns=["yellow","green","purple","red"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started =true;
        levelUp();
    }
});

function gameFlash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },250);
}

function userFlash(btn){
 btn.classList.add("userflash");
 setTimeout(function(){
    btn.classList.remove("userflash");
 },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtns=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtns);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="#F0F8FF";
        },150);
        reset();
    }
}

function keypress(){
    let btn=this;
     userFlash(btn);
    userColor=btn.getAttribute("id")
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", keypress);   
}

function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}