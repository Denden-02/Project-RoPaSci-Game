# Project-RoPaSci-Game
Web exclusive Rock, Paper, & Scissors Project

PSEUDO code for ordinary hoomans:

STEP-BY-STEP PROCESS in making UI FOR RPS GAME:

- setup all div containers
- REARRANGE all boxes using flex display, margin, & alignment properties
- color all background & borders for readability, distinction
- recenter all DIVS, flexboxes
- add all needed HTML Elements and Text
- add needed images (hoomans & Wall-E bot)
- CREATE A "START" BUTTON ON #monitor
- identify boxes that needed Javascript event handlers
- Make sure everything is working using Jest TDD
- Color it out and make it sassy using CSS properties
- END!!

SCRIPT.JS PSEUDOCODE Thought Process:
- IDENTIFY all created functions:
    - playRound(): plays a round
    - getComputerChoice(): RNG for AI's RPS pick
    - getHumanChoice(): pick prompt for user
- IDENTIFY the div containers that need JS
    - Upper BOX > #humanScore, #monitor, #compScore (3)
    - Lower BOX > #pick, #wallpick
- START CALL: the playRound() using the green "START" button > querySelector + AddEventListener(event,func)
- Replace the Green "Start" button with battle narration: "Make a pick"
    -- FIXED: Add relevant HTML, CSS, and use display:none properties to hide them if needed
- THINK about how to do a "Wait for a click" button after starting a game using green START
- SELECT HUMAN: Add querySelectorAll to the #pick BUTTONS > Add event listeners (AddEventListener(event, func)) to make a human pick and start the playRound function
- SELECT COMP: After human pick, also evaluate the getComputerChoice pick (RNG)
- Add an audio queue and setTimeout before playing the round
- SELECT: the question mark '?' div and replace it with the Computer Choice variable (getComputerChoice)
- CHECK all conditionals to see who is the winner
- REPLACE the #monitor to show the round's winner
- UPDATE the scores' table > #humanScore and #compScore
- Continue the BATTLE until the last round (round 5)
- announce the winner
- Replace the start button with "RESTART" text

