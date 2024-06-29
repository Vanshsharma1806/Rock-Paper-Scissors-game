let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#scoreOfUser");
const compscorepara = document.querySelector("#scoreOfComputer");

const generate = ()=>{
    const arr = ["Rock" , "Paper" , "Scissors"];
    const idx = Math.floor(Math.random()*3);
    return arr[idx];
}
const drawgame = ()=>{
    msg.innerText = "game was draw! play again";
    msg.style.backgroundColor="grey";
}

const winner = (uwin , uchoice , cchoice) =>{
    if(uwin){
        
        msg.innerText = `your ${uchoice} beats computer's ${cchoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userscorepara.innerText = userScore;
        if(userScore == 5){
            msg.innerText = `you won`;
            msg.style.backgroundColor = "green";
            disableChoices();
            return;
        }

    }else{
        msg.innerText = `computer's ${cchoice} beats your ${uchoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compscorepara.innerText = compScore;
        if(compScore == 5 ){
            msg.innerText = `you lost`;
            msg.style.backgroundColor = "red";
            disableChoices();
            return;
        }
    }   
}
const disableChoices = () => {
    choices.forEach((choice) => {
        choice.disabled = true;
    });
}


const playgame=(uchoice)=>{
    if (userScore >= 5 || compScore >= 5) {
        return;
    }
    const cchoice = generate();
    console.log(`your choice : ${uchoice} and  cmp choice : ${cchoice}`);
    if(uchoice === cchoice){
        drawgame();
    }else{
        let uwin = true;
        if(uchoice === "Rock"){
            uwin = cchoice === "Paper"? false:true;
        }else if(uchoice === "Paper"){
            uwin = cchoice === "Scissors"? false:true;
        }else{
            uwin = cchoice === "Rock"? false:true;
        }
        winner(uwin , uchoice , cchoice);
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const uchoice = choice.getAttribute("id");
        playgame(uchoice);
    });
});