import Game from "./game.js";

/*
wow such an amazing test
*/

const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

// name and start button forms
// const nameInput = document.getElementById("nameInput");
// const startBtn = document.getElementById("startBtn");
const form = document.querySelector("form");

form.onsubmit = start;


// put these in start button
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
canv.width = 0;
canv.height = 0;

let game = new Game(WIDTH,HEIGHT);
// console.log(form.firstChild);
function start(e) {
    e.preventDefault();
    const nameInputs = form.getElementsByTagName("input");
    // console.log(nameInputs[0]);
    console.log("your name: " + nameInputs[0].value);
    const name = nameInputs[0].value;
    form.removeChild(form.firstChild);
    form.removeChild(form.firstChild);
    form.removeChild(form.firstChild);
    canv.width = WIDTH;
    canv.height = HEIGHT;
    game.start(name);
}

function runGame() {
    // regular game running gamestate
    if (game.gameState == 0) {
        ctx.clearRect(0,0,WIDTH,HEIGHT);
        ctx.fillStyle = "rgb(60,60,60)";
        ctx.fillRect(0,0,WIDTH,HEIGHT);

        game.update();
        game.draw(ctx);
    }
    // nothing updates in this gamestate (could also do clearInterval if preferred)
    else if (game.gameState == 1) {

    }
    // runs only once, transitions to gamestate 1
    else if (game.gameState == 2) {
        const nameInput = document.createElement("input");
        nameInput.setAttribute("id", "nameInput");
        nameInput.setAttribute("type", "text");
        nameInput.required = true;
        
        const enterNameHeader = document.createElement("h5");
        enterNameHeader.textContent = "Enter a name: ";

        const startBtn = document.createElement("button");
        startBtn.setAttribute("id", "startBtn");
        startBtn.textContent = "Start Game";

        
        form.appendChild(enterNameHeader);
        form.appendChild(nameInput);
        form.appendChild(startBtn);
        canv.width = 0;
        canv.height = 0;
        game.end();
        game.player.deleted = false;
        game.gameState = 1;
    }
    else if (game.gameState == 3) {
        
    }
}

setInterval(runGame,17);