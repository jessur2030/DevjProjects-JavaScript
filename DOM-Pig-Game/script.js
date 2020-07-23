/*********************************
 * *Dice game Rules:
 */

// let score = [0,0]
// let roundScore = 0;

//*******Global Variables******************//
let scores, roundScore, activePlayer, gamePlay;

//this call back the initFunction
initFunction();

// document.querySelector("#current-" + activePlayer).textContent = dice;
// // document.querySelector("#current-" + activePlayer).innerHTML =
// //   "<em>" + dice + "</em>";

// x = document.querySelector("#score-0").textContent;
// console.log(x);
//using JS to manipulate the dice style to display:none
document.querySelector(".dice").style.display = "none";

//document.getElementById allows you to manipulate by their Ids
//Which is faster than querySelector

// // This is an example of a CALL BACK FUNCTION
// function btn (){
//Do something
// }
// btn();

// document.querySelector('.btn-roll')
// .addEventListener('click', btn );

// This is a example of an anonymous function
//: this function doesn't have a name. There for it cant'not be reause
//
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlay) {
    //1. ramdon number
    let dice = Math.floor(Math.random() * 6) + 1;
    //2. display reasult
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. update the round score but lony if the rolled number was not a 1
    if (dice !== 1) {
      //add score
      //this does the same as roundScore += dice;
      //roundScore = roundScore + dice;
      roundScore += dice; //this update all internal variable value
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore; //this display the apdated value to the user interface
    } else {
      //**This call back function call the next player
      nextPlayer();
    }
  }
});

//
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlay) {
    // 1. Add current score to the blobal score
    //scores array access activePlayer to manipulate it
    // scores[activePlayer] = scores[activePlayer] + roundScore; // this code does the same thing as the code below
    scores[activePlayer] += roundScore;

    // 2. update th euser interface
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // 3. check if the player score 100 or more, won the game! >
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      // disable the the hold button
      gamePlay = false;
    } else {
      //next player call back function
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); //this is a ternery operator
  roundScore = 0;
  // // this is if statement goes the same thing as the ternery operator above
  // if(activePlayer === 0){
  //     activePlayer = 1;
  // }else{
  //     activePlayer = 0
  // }

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector(".player-0-panel").classList.remove("active");
  //document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";

  // document.querySelector(".dice").style.animationDuration = "2s";
}

document.querySelector(".btn-new").addEventListener("click", initFunction);

// the porpuse of this function is to not repet the same code over and over
function initFunction() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlay = true;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}


