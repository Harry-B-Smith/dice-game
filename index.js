var randomNumber1 = Math.floor((Math.random() * 6) + 1); //generates random number for dice 1
var randomNumber2 = Math.floor((Math.random() * 6) + 1); //generates random number for dice 2

var leftImg = "images\\dice" + randomNumber1 + ".png";
var rightImg = "images\\dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", leftImg); //changes dice image for player 1
document.querySelectorAll("img")[1].setAttribute("src", rightImg); // changes dice image for player 2

//Change Title to reflect winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a tie";
  }
