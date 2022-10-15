let randomNumber1 = ((Math.floor(Math.random()* 6)) + 1);

let randomNumber2 = ((Math.floor(Math.random()* 6)) + 1);

let diceSelector1 = "images/dice" + randomNumber1 + ".png";

let diceSelector2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceSelector1);

document.querySelector(".img2").setAttribute("src", diceSelector2);


if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}