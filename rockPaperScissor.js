let getComputerChoice= ()=>{
    let randomiser= Math.floor(Math.random()*3);
    if(randomiser==0){
        return "rock";
    }
    else if(randomiser==1){
        return "paper";
    }
    else {return "scissors";}};

let button1=document.querySelector(".rockIMG");
let button2=document.querySelector(".paperIMG");
let button3=document.querySelector(".scissorsIMG");
let userWin=0;
let computerWin=0;
let playerCount=document.querySelector(".playerCount");
let computerCount=document.querySelector(".computerCount");
button1.addEventListener("click",()=>{
    const tie=document.querySelector("#tie");
   const alpha= getComputerChoice();
    if(alpha=="scissors"){
        userWin++;
        tie.textContent="User Point"
    }
    else if(alpha=="paper"){
        computerWin++;
        tie.textContent="Computer Point";
    }
    else{
        
        tie.textContent="Tie";
        
    }
    playerCount.textContent=`${userWin}`;
    computerCount.textContent=`${computerWin}`;
    checkForWin();
    
});


button2.addEventListener("click",()=>{
    const tie=document.querySelector("#tie");
    const alpha= getComputerChoice();
    if(alpha=="rock"){
        userWin++;
        tie.textContent="";
    }
    else if(alpha=="scissors"){
        computerWin++;
        tie.textContent="";
    }
    else{tie.textContent="Tie";}
    playerCount.textContent=`${userWin}`;
    computerCount.textContent=`${computerWin}`;
    checkForWin();
});

button3.addEventListener("click",()=>{
    const tie=document.querySelector("#tie");
    const alpha=getComputerChoice();
    if(alpha=="scissors"){
        userWin++;
        tie.textContent="";
    }
    else if(alpha=="paper"){
        computerWin++;
        tie.textContent="";
    }
    else{
        tie.textContent="Tie";
        }
    playerCount.textContent=`${userWin}`;
    computerCount.textContent=`${computerWin}`;
    checkForWin();
});

function checkForWin(){
    if(userWin==5){
const resultUserWin=document.createElement("div");
const resultUserWinContent=document.createTextNode("Congrats the user wins !");
resultUserWin.appendChild(resultUserWinContent);
const resultContainer=document.querySelector("#resultContainer");
resultContainer.appendChild(resultUserWin);
setTimeout(forTimeout,3000);
return true;
}
else if(computerWin==5){
    const resultComputerWin=document.createElement("div");
    const resultComputerWinContent=document.createTextNode("Oops , You lost :(");
    resultComputerWin.appendChild(resultComputerWinContent);
    const resultContainer=document.querySelector("#resultContainer");
    resultContainer.appendChild(resultComputerWin);
    setTimeout(forTimeout,3000);
    return true;
}
else{}}

function forTimeout(){
    userWin=0;
    computerWin=0;
    resultContainer.textContent="";
    playerCount.textContent='0';
    computerCount.textContent='0';
}

