"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 50;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

// Helper functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //   document.querySelector('.message').textContent = '🎉 Correct Number!';

  // When no input but check is clicked
  if (!guess) {
    displayMessage("🚫 No number selected, pick a number to play!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Checking High Score
    if (score > highScore) {
      highScore = score;
      // Highscore
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "👆 Your number is too high!"
          : "👇 Your number is too low!";
      score--;
      displayScore(score);

      // When player number higher than secret but score reaches zero.
    } else {
      displayMessage("🙀 You lost, don't worry, try again next time!");
      displayScore(0);
    }
  }

  // When player number higher than secret
  // } else if (guess > secretNumber) {
  //     if (score > 1) {
  //         document.querySelector('.message').textContent = '👆 Your number is too high!';
  //         score--;
  //         document.querySelector('.score').textContent = score;

  //         // When player number higher than secret but score reaches zero.
  //     } else {
  //         document.querySelector('.message').textContent =
  //             "🙀 You lost, don't worry, try again next time!";
  //         document.querySelector('.score').textContent = 0;
  //     }
  //     // When player number higher than secret
  // } else if (guess < secretNumber) {
  //     if (score > 1) {
  //         document.querySelector('.message').textContent =
  //             '👇 Your number is too low!';
  //         score--;
  //         document.querySelector('.score').textContent = score;

  //         // When player number higher than secret but score reaches zero.
  //     } else {
  //         document.querySelector('.message').textContent =
  //             "🙀 You lost, don't worry, try again next time!";
  //         document.querySelector('.score').textContent = 0;
  //     }
  // }
});

// Reset button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
});
