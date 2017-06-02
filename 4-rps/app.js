var beats = {
    "rock":"scissors",
    "paper":"rock",
    "scissors":"paper"
}

// var message = `rock beats ${beats["rock"]}`;

// document.write(message);

// Get computer random choice
function getComputerChoice(){
    var choices = Object.keys(beats);
    var choice = choices[Math.floor(Math.random()* 3)];
    console.log(choice);
    return choice;
}

function getPlayerChoice(c) {
    var computerChoice = getComputerChoice ();
    if (beats[c]) == computerChoice) {
        alert(`You rekt ${computerChoice}`);
    } else if (beats[computerChoice] == c) {
        alert(`You got rekt by ${computerChoice}`);
    } else {
        alert("Tie!");
    }

}
    }
}

// Determine winner

// Output who won/modify scoreboard