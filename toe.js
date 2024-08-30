// *************Taking data from HTML**************

console.log("Welcome to Tic Tac Toe");
let countX = 0;
let countO = 0;
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newGame");
let turn = true;
let msg = document.querySelector("#msg");
let xWin = document.querySelector(".XWin");
let oWin = document.querySelector(".OWin");
let gifbox = document.querySelector(".imageBox");
let info = document.querySelector(".info");

// *********Creating Winning Pattern*********
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
// ***********For Inserting Zero Kata*************
boxes.forEach((box) =>
{
  box.addEventListener("click" ,() =>{
    audioTurn.play();
    if(turn)
    {
        box.innerText = "O";
        turn = false;
        info.innerText = "Turn For X";
    }
    else
    {
        box.innerText = "X";
        info.innerText = "Turn For O";
        turn = true;
    }
    box.disabled = true;
    checkWinner();
  })
})

// **************For cheking who is Winner****************

const checkWinner = () =>
{
   for(let pattern of winPatterns)
   {
    let pos1Vel = boxes [pattern[0]].innerText;
    let pos2Vel = boxes [pattern[1]].innerText;
    let pos3Vel = boxes [pattern[2]].innerText;

    if(pos1Vel !== "" && pos2Vel !== "" && pos3Vel !== "")
    {
        if(pos1Vel === pos2Vel && pos2Vel  === pos3Vel)
        {
            showWinner(pos1Vel);
            countWin(pos1Vel);
        }
    }
   }
}
// ****************For show Winner And Count Points**********
const showWinner = (winner) =>
    {
      msg.innerText = `Conratulation, Winner of game is = ${winner}`;
      gifbox.classList.remove("hid");
      disablebox();
      music.play();
    }

const countWin = (valo) =>
{
    if(valo === "X")
    {
        xWin.innerText = countX =countX +1;
    }
    else{
        oWin.innerText = countO = countO + 1;
    }
}

// *************For New Game **************

newbtn.addEventListener("click", () =>
{
    newGame();
});

const newGame =() =>
{
    turn = true;
    enablebox();
  gifbox.classList.add("hid");
};

const enablebox = () =>
    {
        for(let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
            music.pause();
            msg.innerText = "Play";
        }
    };

// ****************For Reset Game**********

resetbtn.addEventListener("click", () =>
{
    resetGame();
});

const resetGame =() =>
{
    turn = true;
    delebox();
    gifbox.classList.add("hid");
};

const delebox = () =>
{
    for(let box of boxes)
    {
        // box.disabled = false;
        box.innerText = "";
        music.pause();
        msg.innerText = "Lets Play";
        xWin.innerText = countX =0;
        oWin.innerText = countO = 0;

    }
};

const disablebox = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}


