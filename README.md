# Project-RoPaSci-Game
Console exclusive Rock, Paper, &amp; Scissors Project

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
- Identify all created functions:
    - playRound(): plays a round
    - getComputerChoice(): RNG for AI's RPS pick
    - getHumanChoice(): pick prompt for user
- Identify the div containers that need JS
    - Upper BOX > #humanScore, #monitor, #compScore (3)
    - Lower BOX > #pick, #wallpick
- Use querySelectors to the #pick BUTTONS > Add event listeners (AddEventListener(event, func)) to make a pick
- 

