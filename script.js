// FIXME: - Setup file folder in Github with index.html, readme, js ScriptProcessorNode
// FIXME: - Create function that will make the AI pick R,P,S {via Math.floor(Math.random())}
// FIXME: - Create function that prompts user to pick R,P,S using getHumanChoice()
// FIXME:  - Initialize a '0' counter for player and computer scores 
// - Create a function that takes the player and comp variables as argument to start a round (playRound)
        // - IF player(rock) vs. comp(scissors)
        // - IF player(scissors) vs. comp(paper)
        // - IF player(paper) vs. comp(rock)
            //  - RETURN: increment 1 player point and log "You win! x beats y." 
        // - vice-versa of above 3 situations
            //  - RETURN: increment 1 computer point and log "You lose! y beats x."
// - Create a function that calls 5 rounds

let rck = "rock";
let ppr = "paper";
let scr = "scissors";
let CompScores = 0;
let UserScores = 0;

function getComputerChoice() {
    var i = Math.floor((Math.random()*3) +1);
    // using arrays:
    // var lst = [rck,ppr,scr];
    // return lst.at(i);
    // console.log(i);

    //using conditionals & comparisons:
    if (i == 1) {return rck};
    if (i == 2) {return ppr};
    if (i == 3) {return scr};
};

function getHumanChoice() {
    let pick = prompt (`What\'s your pick? `);
    // research how to make the string variables case-insensitive
    // SOlution: trim and convert to lowercase before comparison

    //NORMALMODE:

    if (pick == undefined) {alert("What the fudge??");}

    pick = pick.trim().toLowerCase();

    // if (pick == "rock" || pick == "paper" || pick == "scissors") {return pick;}
    // else {alert("Hey, please choose rock, paper, or scissors!");}
    // };

    //HARDMODE:
    return (pick == "rock" || pick == "paper" || pick == "scissors") ? pick : alert("Hey, please choose rock, paper, or scissors!");
}



console.log("Hello Odin!")
