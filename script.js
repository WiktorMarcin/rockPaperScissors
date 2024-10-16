console.log("Hello World!")

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

const scoreDisplay = document.querySelector("#scoreDisplay");
const lastGame = document.querySelector("#lastGame");


let PlayerScore = 0;
let BotScore = 0;

function randomRPS(){
    let number = Math.floor((Math.random() * 3) + 1);

    switch(number) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }

}

function getHumanChoice(){
    let humanRPS = prompt("Rock, Papers and Scissors What do you choose?");
    
    if (humanRPS == "Rock" || humanRPS == "rock" || humanRPS == "RocK"){
        return "Rock"
    } else if (humanRPS == "Paper" || humanRPS == "paper" || humanRPS == "PapeR"){
        return "Paper"
    } else if (humanRPS == "Scissors" || humanRPS == "scissors" || humanRPS == "ScissorS"){
        return "Scissors"
    }
}

function calculateWinner(choiceOne, choiceTwo){
    if (choiceOne == choiceTwo){
        console.log("Draw! " + choiceOne + " vs " + choiceTwo);
    } else if(choiceOne == "Rock" && choiceTwo == "Scissors" || choiceOne == "Scissors" && choiceTwo == "Paper" || choiceOne == "Paper" && choiceTwo == "Rock"){
        console.log("Congratulation! " + choiceOne +  " Wins");
        PlayerScore++;
    } else if(choiceTwo == "Rock" && choiceOne == "Scissors" || choiceTwo == "Scissors" && choiceOne == "Paper" || choiceTwo == "Paper" && choiceOne == "Rock"){
        console.log("Congratulation! " + choiceTwo +  " Wins");
        BotScore++;
    }

    scoreDisplay.textContent = "The Score is: " + PlayerScore + " For the player " + BotScore + " For the bot";
    lastGame.textContent = choiceOne + " vs " + choiceTwo;
}


rockButton.addEventListener("click", () => {
    calculateWinner("Rock", randomRPS());
});
paperButton.addEventListener("click", () => {
    calculateWinner("Paper", randomRPS());
});
scissorsButton.addEventListener("click", () => {
    calculateWinner("Scissors", randomRPS())
});


// for (let i = 0; i <= 5; i++){
//     calculateWinner(getHumanChoice(), randomRPS());
// }


