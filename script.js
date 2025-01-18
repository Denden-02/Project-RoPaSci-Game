// FIXME: - Setup file folder in Github with index.html, readme, js ScriptProcessorNode
// - Create function that will make the AI pick R,P,S {via Math.floor(Math.random())}
// - Create function that prompts user to pick R,P,S
// - Initialize a '0' counter for player and computer scores 
// - Create a function that takes the player and comp variables as argument to start a round (playRound)
        // - IF player(rock) vs. comp(scissors)
        // - IF player(scissors) vs. comp(paper)
        // - IF player(paper) vs. comp(rock)
            //  - RETURN: increment 1 player point and log "You win! x beats y." 
        // - vice-versa of above 3 situations
            //  - RETURN: increment 1 computer point and log "You lose! y beats x."
// - Create a function that calls 5 rounds

let rck = "Rock";
let ppr = "Paper";
let scr = "Scissors";

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




console.log("Hello Odin!")
