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

let offDisplay = () => document.querySelectorAll("div.subsub_1#monitor > p").forEach(each => each.style.display = "none"); 

//EVENT HANDLERS:

document.getElementById("start").addEventListener('click', startGame);

//FUNCTIONS:
function startGame() {
    let buttons = document.querySelectorAll(".subsub_2 > button") // result: nodelist object
    buttons.forEach(
        function(BTN) {
            return BTN.addEventListener("click", playRound)
        });
    hideStart();
    showRound();
    showChoose();
}

function getComputerChoice() {
    let pck = ["rock","paper","scissors"];
    let i = Math.floor(Math.random()*3);
    return pck[i];
};

//SKIP BELOW FUNCTION FIRST
// function getHumanChoice() {
//     while (true) {
//         if (player == undefined) {
//             continue; //CRASHING HERE BECAUSE OF WHILE LOOP;
//         } else if (player == 'rock' || player == 'scissors' || player == 'paper') {
//             return player;
//         }
//     };
// }

// try NORMAL MODE: addEventListeners
// TODO: 3/9/2025 CHECK SEMANTICS, CHECK LOGIC OF RPS BUTTONS, STUDY WHAT NODELIST METHOD WOULD WORK ON ALL THE BUTTONS 
// also try HARD MODE: await/async method
let CompScores = 0;
let UserScores = 0;  
let roundCount = 0;

function batotopick(callback) {
    let batopik = new Audio(images2use/batobatopikpik.mp3);
    batopik.play();
    setTimeout(callback, 2000)
}
function playRound(e) {
    let player = e.currentTarget.value;
    let comp = getComputerChoice();
    // for (let r=1; r<=5;++r) {};
    
    if (player == 'rock' && comp == 'scissors' || player == 'scissors' && comp == 'paper' || player == 'paper' && comp == 'rock') {
        UserScores += 1;
        document.getElementById("humanScore").innerHTML = `${UserScores}<p>Hooman</p>`;
        document.getElementById("compScore").innerHTML = `${CompScores}<p>Wall-y</p>`;
        document.getElementById("round").textContent = `ROUND ${roundCount+=1}`;
        offDisplay();
        showRound();
        showWin();
        if (roundCount === 5) {
                setTimeout(checkRound, 3000)
                };

    } else if (player == 'scissors' && comp == 'rock' || player == 'paper' && comp == 'scissors' || player == 'rock' && comp == 'paper') {
        CompScores += 1;
        document.getElementById("humanScore").innerHTML = `${UserScores}<p>Hooman</p>`;
        document.getElementById("compScore").innerHTML = `${CompScores}<p>Wall-y</p>`;
        document.getElementById("round").textContent = `ROUND ${roundCount+=1}`;
        offDisplay();
        showRound();
        showLose();
        if (roundCount === 5) {
            
            setTimeout(checkRound, 3000)

            };
        
 
    } else {
        document.getElementById("humanScore").innerHTML = `${UserScores }<p>Hooman</p>`;
        document.getElementById("compScore").innerHTML = `${CompScores}<p>Wall-y</p>`;
        document.getElementById("round").textContent = `ROUND ${roundCount}`;        offDisplay();
        showRound();
        showDraw();      
    }
    };

function checkRound() { 
        if (UserScores > CompScores) {
            offDisplay();
            showWfinal();
            showStart();
            roundCount = 0;        
        } else if (UserScores< CompScores) {
            offDisplay();
            showLfinal();
            showStart();
            roundCount = 0;
        }
    };

// TODO: FINISH LOGIC 3/12
// /2025
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


