// the choices
const options = ["Rock", "Paper", "Scissors"];

// starting scores
let playerScore = 0;
let pcScore = 0;

// random pc pick
function randomOptionPc() {
    const random = Math.floor(Math.random() * options.length);
    return (options[random]);
}

// display value pc
function showPcValue(pcValue) {
    if (pcValue === "Rock") {
        document.getElementById('pc-wrapper').innerHTML = '<img src="img/option-steen.svg" alt="optie steen"></img>';
    } else if (pcValue === "Paper") {
        document.getElementById('pc-wrapper').innerHTML = '<img src="img/option-papier.svg" alt="optie papier">';
    } else if (pcValue === "Scissors") {
        document.getElementById('pc-wrapper').innerHTML = '<img src="img/option-schaar.svg" alt="optie schaar">';
    }
}

// display values winner and score
function displayWinner(player, pc, gameCase) {
    
    // display values
    document.getElementById('player-value').innerHTML = player;
    document.getElementById('pc-value').innerHTML = pc;

    // display winner
    if (gameCase === 1 || gameCase === 5 || gameCase === 9) {
        document.getElementById('action').innerHTML = "same as";
        document.getElementById('outcome').innerHTML = "It's a tie!";
    } else if (gameCase === 2) {
        document.getElementById('action').innerHTML = "get's covered by";
        document.getElementById('outcome').innerHTML = "You lose";
    } else if (gameCase === 3) {
        document.getElementById('action').innerHTML = "crushes";
        document.getElementById('outcome').innerHTML = "You win";
    } else if (gameCase === 4) {
        document.getElementById('action').innerHTML = "covers";
        document.getElementById('outcome').innerHTML = "You win";
    } else if (gameCase === 6) {
        document.getElementById('action').innerHTML = "gets cut by";
        document.getElementById('outcome').innerHTML = "You lose";
    } else if (gameCase === 7) {
        document.getElementById('action').innerHTML = "gets crushed by";
        document.getElementById('outcome').innerHTML = "You lose";
    } else if (gameCase === 8) {
        document.getElementById('action').innerHTML = "cuts";
        document.getElementById('outcome').innerHTML = "You win";
    }

    // display score
    if (gameCase === 3 || gameCase === 4 || gameCase === 8) {
        playerScore += 1;
    } else if (gameCase === 2 || gameCase === 6 || gameCase === 7) {
        pcScore += 1;
    }
    console.log("you have won " + playerScore + "games");
    console.log("pc have won " + pcScore + "games");
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('pc-score').innerHTML = pcScore;
}

// the game
function letsPlay(value) {
    var pcValue = randomOptionPc();
    showPcValue(pcValue);
    console.log("Your weapon of choice: " + value);
    console.log("Pc choice: " + pcValue);
    if (value === "Rock") {
        if (pcValue === "Rock") {
            console.log("its a tie");
            displayWinner(value, pcValue, 1);
        } else if (pcValue === "Paper") {
            console.log("you lose");
            displayWinner(value, pcValue, 2);
        } else if (pcValue === "Scissors") {
            console.log("you win");
            displayWinner(value, pcValue, 3);
        } 
    } else if (value === "Paper") {
        if (pcValue === "Rock") {
            console.log("you win");
            displayWinner(value, pcValue, 4);
        } else if (pcValue === "Paper") {
            console.log("its a tie");
            displayWinner(value, pcValue, 5);
        } else if (pcValue === "Scissors") {
            console.log("you lose");
            displayWinner(value, pcValue, 6);
        } 
    } else if (value === "Scissors") {
        if (pcValue === "Rock") {
            console.log("you lose");
            displayWinner(value, pcValue, 7);
        } else if (pcValue === "Paper") {
            console.log("you win");
            displayWinner(value, pcValue, 8);
        } else if (pcValue === "Scissors") {
            console.log("its a tie");
            displayWinner(value, pcValue, 9);
        } 
    }


}