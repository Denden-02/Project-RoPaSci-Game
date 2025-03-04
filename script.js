function getComputerChoice() {
    var i = Math.floor((Math.random()*3) +1);
    // using arrays:
    // var lst = [rck,ppr,scr];
    // return lst.at(i);
    // console.log(i);

    //using conditionals & comparisons:
    if (i == 1) {return "rock"};
    if (i == 2) {return "paper"};
    if (i == 3) {return "scissors"};
};

function getHumanChoice() {
    let pick = prompt (`What\'s your pick? `);
    // research how to make the string variables case-insensitive
    // SOlution: trim and convert to lowercase before comparison

    //NORMAL MODE:

    if (pick == undefined) {
        alert("What the fudge?? Cancel the damn match!");
        //RETURN a START STATE FUNCTION
    }

    pick = pick.trim().toLowerCase();

    // if (pick == "rock" || pick == "paper" || pick == "scissors") {return pick;}
    // else {alert("Hey, please choose rock, paper, or scissors!");}
    // };

    //HARD MODE:
    return (pick == "rock" || pick == "paper" || pick == "scissors") ? pick : alert("Hey, please choose rock, paper, or scissors!"); playRound();
}

function playRound() {
    
    let CompScores = 0;
    let UserScores = 0;  

    document.getElementById("start").
    monitor.textContent = "Make a pick";

    for (let i=1; i<=5;) {
    let player = getHumanChoice();
    let comp = getComputerChoice();
    // console.log(player + ' ' + comp);
    //NORMAL MODE:
    if (player == 'rock' && comp == 'scissors' || player == 'scissors' && comp == 'paper' || player == 'paper' && comp == 'rock') {
        UserScores += 1;
        console.log(`player => ${player} vs. computer => ${comp}: You WIN!`);
        i++;
        console.table({"Player":UserScores,"Computer":CompScores});
        // console.log('current '+i);
    } else if (player == 'scissors' && comp == 'rock' || player == 'paper' && comp == 'scissors' || player == 'rock' && comp == 'paper') {
        CompScores += 1;
        console.log(`player => ${player} vs. computer => ${comp}: You LOSE!`);
        i++;
        console.table({"Player":UserScores,"Computer":CompScores});
        // console.log('current '+i);
    } else {
        console.log("DRAW! Repeating the round.");
        console.table({"Player":UserScores,"Computer":CompScores});
        // console.log('current '+i);
    }

    }
    
    if ( UserScores> CompScores ) {
        console.log(`FINAL SCORE: 
            player(${UserScores})
            computer(${CompScores})

            YOU WIN!`);
    } else console.log (
            `FINAL SCORE: 

            player(${UserScores})
            computer(${CompScores})
            
            YOU LOSE!`
        );
}

console.log("Hello Odin. Let's play!");

document.getElementById("start").addEventListener('click', playRound);
//3/3/2025 CONTINUE SOLVING HOW THE ADDEVENTLISTENER WORKS ON PORT 5500

// FIXME: - Setup file folder in Github with index.html, readme, js ScriptProcessorNode
// FIXME: - Create function that will make the AI pick R,P,S {via Math.floor(Math.random())}
// FIXME: - Create function that prompts user to pick R,P,S using getHumanChoice()
// FIXME:  - Initialize a '0' counter for player and computer scores 
// FIXME:- Create a function that takes the player and comp variables as argument to start a round (playRound)
        // - IF player(rock) vs. comp(scissors)
        // - IF player(scissors) vs. comp(paper)
        // - IF player(paper) vs. comp(rock)
            //  - RETURN: increment 1 player point and log "You win! x beats y." 
        // - vice-versa of above 3 situations
            //  - RETURN: increment 1 computer point and log "You lose! y beats x."
// - Create a function that calls 5 rounds


