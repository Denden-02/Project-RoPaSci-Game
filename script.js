//DISPLAY 'TOGGLE' FUNCTIONS:
let hideStart = () => document.getElementById("start").style.display = "none";
let showStart= () => document.getElementById("start").style.display = "block"; 

let hideChoose = () => document.getElementById("choose").style.display = "none";
let showChoose = () => document.getElementById("choose").style.display = "block"; 

let hideRound = () => document.getElementById("round").style.display = "none";
let showRound = () => document.getElementById("round").style.display = "block"; 

let hideWin = () => document.getElementById("win").style.display = "none";
let showWin = () => document.getElementById("win").style.display = "block"; 

let hideLose = () => document.getElementById("lose").style.display = "none";
let showLose = () => document.getElementById("lose").style.display = "block"; 

let hideDraw = () => document.getElementById("draw").style.display = "none";
let showDraw = () => document.getElementById("draw").style.display = "block"; 

let hideWfinal = () => document.getElementById("Wfinal").style.display = "none";
let showLfinal = () => document.getElementById("Lfinal").style.display = "block"; 
console.log("Hello Odin. Let's play!");

let offDisplay = () => document.quer("div.subsub_1#monitor > p").style.display = "none"; 

//EVENT HANDLERS:
let player = document.querySelector(".subsub_2 > button").addEventListener("click", (event) => event.target.value);

document.getElementById("start").addEventListener('click', playRound);

//FUNCTIONS:
function getComputerChoice() {
    var i = Math.floor((Math.random()*3) +1);
    if (i == 1) {return "rock"};
    if (i == 2) {return "paper"};
    if (i == 3) {return "scissors"};
};

function getHumanChoice() {
    while (true) {
        if (player == undefined) {
            continue; //CRASHING HERE BECAUSE OF WHILE LOOP;
        } else if (player == 'rock' || player == 'scissors' || player == 'paper') {
            return player;
        }
    };
}

// TODO:try NORMAL MODE: addEventListeners
// also try HARD MODE: await/async method
function playRound() {
    let CompScores = 0;
    let UserScores = 0;  

    hideStart();
    showChoose();
 
    for (let r=1; r<=5;++r) {
    let comp = getComputerChoice();
    
    getHumanChoice();

    if (player == 'rock' && comp == 'scissors' || player == 'scissors' && comp == 'paper' || player == 'paper' && comp == 'rock') {
        UserScores += 1;
        document.getElementById("humanScore").textContent = UserScores;
        document.getElementById("compScore").textContent = CompScores;
        document.getElementById("round").textContent = `ROUND ${r}`;
        hideChoose();
        showRound();
        showWin();
        player == undefined;

    } else if (player == 'scissors' && comp == 'rock' || player == 'paper' && comp == 'scissors' || player == 'rock' && comp == 'paper') {
        CompScores += 1;
        document.getElementById("humanScore").textContent = UserScores;
        document.getElementById("compScore").textContent = CompScores;
        document.getElementById("round").textContent = `ROUND ${r}`;
        hideChoose();
        showRound();
        showLose();
        player == undefined;
 
    } else {
        document.getElementById("humanScore").textContent = UserScores;
        document.getElementById("compScore").textContent = CompScores;
        document.getElementById("round").textContent = `ROUND ${r}`;
        hideChoose();
        showRound();
        showDraw();   
        player == undefined;     
    }

    };
    
    if (UserScores > CompScores) {
        offDisplay();
        showWfinal();
        showStart();        
    } else if (UserScores< CompScores) {
        offDisplay();
        showLfinal();
        showStart();
    };
};

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


