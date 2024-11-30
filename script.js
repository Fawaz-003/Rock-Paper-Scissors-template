let choices = document.querySelectorAll('.emoji');
let userHand = document.querySelector('.user');
let compHand = document.querySelector('.comp');

let results = document.querySelector('.result');
let won = document.querySelector('.won');
let tie = document.querySelector('.tie');
let lost = document.querySelector('.lost');

let playerChoice = "";
let cpuChoice = "";

let compOption = {
    rock: "✊🏻", 
    papper: "🖐🏻", 
    scissors: "✌🏻"
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        /* disableButton(true);  */   
        userHand.textContent = "✊🏻";
        compHand.textContent = "✊🏻";
        results.textContent = "Let's Play!";
        
        playerChoice = choice.value;
        cpuChoice = cpuOption();
        
        userHand.classList.add("userhand");
        compHand.classList.add("comphand");
        
        setTimeout(() => {
            userHand.textContent = compOption[playerChoice];
            compHand.textContent = compOption[cpuChoice];
            
     userHand.classList.remove("userhand");
     compHand.classList.remove("comphand");
        
        showWinner();
        
        /* disableButton(false); */
        },2000);        
    });
});

function cpuOption() {
    let cpuOption = ["rock", "papper", "scissors"]
    let randomChoice =                                                          cpuOption[Math.floor(Math.random() * cpuOption.length)];
    return randomChoice;
}

let showWinner = () => {
    if (playerChoice === cpuChoice) {
        results.textContent = "Draw!";
        tie.textContent++;
    }
    else if (
        playerChoice == "papper" && 
        cpuChoice == "rock" ||
        playerChoice == "scissors" && 
        cpuChoice == "papper" ||
        playerChoice == "rock" && 
        cpuChoice == "scissors"
    ) {
        results.textContent = "You Won!";
        won.textContent++;
    }
    else {
        results.textContent = "You Lost!"
        lost.textContent++;
    }
}
