var button = document.getElementById("diceRollerbutton");
var placeholder1 = document.getElementById("placeholder1");
var placeholder2 = document.getElementById("placeholder2");
var player1 = document.querySelector(".player1 span");
var player2 = document.querySelector(".player2 span");
var p1 = 0;
var p2 = 0;
button.onclick = function () {
  result = Math.random();

  result = Math.round(Math.random() * 10);

  function getRndInteger(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  var images = [
    '<img src="./assets/dice1.png" alt="" />',
    '<img src="./assets/dice2.png" alt="" />',
    '<img src="./assets/dice3.png" alt="" />',
    '<img src="./assets/dice4.png" alt="" />',
    '<img src="./assets/dice5.png" alt="" />',
    '<img src="./assets/dice6.png" alt="" />',
  ];

  result = getRndInteger(90, 100);

  let getRange1 = getRndInteger(0, 5);
  let getRange2 = getRndInteger(0, 5);

  result1 = images[getRange1];
  result2 = images[getRange2];
  placeholder1.innerHTML = result1;
  placeholder2.innerHTML = result2;
  if (result1 > result2) {
    if (p1 >= 10) {
      alert("player one is winner");
      p1 = 0;
      p2 = 0;
    } else {
      player1.innerHTML = p1 += 1;
    }
  } else if (result2 > result1) {
    if (p2 >= 10) {
      alert("player Two is winner");
      p1 = 0;
      p2 = 0;
    } else {
      player2.innerHTML = p2 += 1;
    }
  } else {
    alert("tied in Score");
  }
};