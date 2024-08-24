let playerOne;
let playerTwo;

let playerOneName;
let playerTwoName;

let numberOfRounds;

let i = 1;
let playerOneWins = 0;
let playerTwoWins = 0;

let playerOneScoreHeading;
let playerTwoScoreHeading;



function startGame() {
  // Get selected grid color
  const selectedColor = document.getElementById("gridColor").value;

  //console.log(selectedColor);

  const selectedColorForBackground = document.getElementById("backgroundColor").value;

  const selectedColorForPlayerOne = document.getElementById("playerOneColor").value;

  const selectedColorForPlayerTwo = document.getElementById("playerTwoColor").value;

  const nameForPlayerOne = document.getElementById("playerOneName").value;

  const nameForPlayerTwo = document.getElementById("playerTwoName").value;

  const numberOfRounds = document.getElementById("numberOfRounds").value;

  // Redirect to game page with selected color as query parameter
  window.location.href = "gamePage.html?color=" + selectedColor + "&bg=" + selectedColorForBackground + "Bg" + "&playerOne=" + selectedColorForPlayerOne + "&playerTwo=" + selectedColorForPlayerTwo + "&playerOneName=" + nameForPlayerOne + "&playerTwoName=" + nameForPlayerTwo + "&roundNumber=" + numberOfRounds + "&tableColor=" + selectedColor + "Table";
}

function goToMainMenu() {
  // Redirect to main menu
  window.location.href = "mainPage.html";
}

function changeOptionColor() {
  var dropdown = document.getElementById("playerOneColor");
  var selectedOptionStyle = window.getComputedStyle(dropdown.options[dropdown.selectedIndex]);
  var backgroundColor = selectedOptionStyle.backgroundColor;
  dropdown.style.backgroundColor = backgroundColor;

  dropdown = document.getElementById("gridColor");
  selectedOptionStyle = window.getComputedStyle(dropdown.options[dropdown.selectedIndex]);
  backgroundColor = selectedOptionStyle.backgroundColor;
  dropdown.style.backgroundColor = backgroundColor;

  dropdown = document.getElementById("backgroundColor");
  selectedOptionStyle = window.getComputedStyle(dropdown.options[dropdown.selectedIndex]);
  backgroundColor = selectedOptionStyle.backgroundColor;
  dropdown.style.backgroundColor = backgroundColor;

  dropdown = document.getElementById("playerTwoColor");
  selectedOptionStyle = window.getComputedStyle(dropdown.options[dropdown.selectedIndex]);
  backgroundColor = selectedOptionStyle.backgroundColor;
  dropdown.style.backgroundColor = backgroundColor;

  dropdown = document.getElementById("numberOfRounds");
  selectedOptionStyle = window.getComputedStyle(dropdown.options[dropdown.selectedIndex]);
  backgroundColor = selectedOptionStyle.backgroundColor;
  dropdown.style.backgroundColor = backgroundColor;
}

document.addEventListener("DOMContentLoaded", function () {
  // Get query parameter for grid color
  const urlParams = new URLSearchParams(window.location.search);

  const gridColor = urlParams.get('color');
  const bg = urlParams.get('bg');

  playerOne = urlParams.get('playerOne');
  playerTwo = urlParams.get('playerTwo');

  playerOneName = urlParams.get('playerOneName');
  playerTwoName = urlParams.get('playerTwoName');

  numberOfRounds = urlParams.get('roundNumber');

  const tableColor = urlParams.get('tableColor');

  const playerOneNameHeading = document.getElementById("playerOneNameHeading");
  playerOneNameHeading.innerText = `${playerOneName}`;

  const playerTwoNameHeading = document.getElementById("playerTwoNameHeading");
  playerTwoNameHeading.innerText = `${playerTwoName}`;

  // Get the game board element
  const board = document.getElementById("board");

  const base = document.getElementById("scoreTable");

  const background = document.getElementById("bodyBackground");

  // Set the grid color based on the query parameter
  if (gridColor) {
    board.className = "board " + gridColor;
  }

  if (scoreTable) {
    scoreTable.className = "base " + tableColor;
  }

  if (bg) {
    bodyBackground.className = "background " + bg;
  }
});

// Create array to hold board data
let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

// Define game variables
let player = 1;
let gameOver = false;

// Pull in cells from DOM
const cellElements = document.querySelectorAll(".cell");

// Pull in the result text from DOM
const resultElement = document.getElementById("result");

// Pull in the round number text from DOM
const roundNumberHeading = document.getElementById("round");
roundNumberHeading.innerText = `Round ${i}`;

playerOneScoreHeading = document.getElementById("playerOneScore");
playerOneScoreHeading.innerText = `${playerOneWins}`;

playerTwoScoreHeading = document.getElementById("playerTwoScore");
playerTwoScoreHeading.innerText = `${playerTwoWins}`;

// Add event listener
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index);
  });
});

// Create function for placing markers
function placeMarker(index) {
  // Determine row and column from index
  let col = index % 3
  let row = (index - col) / 3

  // Check if the current cell is empty
  if (boardData[row][col] == 0 && gameOver == false) {
    boardData[row][col] = player;
    // change player
    player *= -1;
    // Update the screen with markers
    if (playerOne == "cornflower" && playerTwo == "conflower") {
      drawMarkersCornflowerCornflower();
    } else if (playerOne == "cornflower" && playerTwo == "fire") {
      drawMarkersCornflowerFire();
    } else if (playerOne == "cornflower" && playerTwo == "honeysuckle") {
      drawMarkersCornflowerHoneysuckle();
    } else if (playerOne == "cornflower" && playerTwo == "ming") {
      drawMarkersCornflowerMing();
    } else if (playerOne == "cornflower" && playerTwo == "sunset") {
      drawMarkersCornflowerSunset();
    } else if (playerOne == "fire" && playerTwo == "cornflower") {
      drawMarkersFireCornflower();
    } else if (playerOne == "fire" && playerTwo == "fire") {
      drawMarkersFireFire();
    } else if (playerOne == "fire" && playerTwo == "honeysuckle") {
      drawMarkersFireHoneysuckle();
    } else if (playerOne == "fire" && playerTwo == "ming") {
      drawMarkersFireMing();
    } else if (playerOne == "fire" && playerTwo == "sunset") {
      drawMarkersFireSunset();
    } else if (playerOne == "honeysuckle" && playerTwo == "fire") {
      drawMarkersHoneysuckleFire();
    } else if (playerOne == "honeysuckle" && playerTwo == "honeysuckle") {
      drawMarkersHoneysuckleHoneysuckle();
    } else if (playerOne == "honeysuckle" && playerTwo == "ming") {
      drawMarkersHoneysuckleMing();
    } else if (playerOne == "honeysuckle" && playerTwo == "sunset") {
      drawMarkersHoneysuckleSunset();
    } else if (playerOne == "honeysuckle" && playerTwo == "cornflower") {
      drawMarkersHoneysuckleCornflower();
    } else if (playerOne == "ming" && playerTwo == "fire") {
      drawMarkersMingFire();
    } else if (playerOne == "ming" && playerTwo == "honeysuckle") {
      drawMarkersMingHoneysuckle();
    } else if (playerOne == "ming" && playerTwo == "ming") {
      drawMarkersMingMing();
    } else if (playerOne == "ming" && playerTwo == "sunset") {
      drawMarkersMingSunset();
    } else if (playerOne == "ming" && playerTwo == "cornflower") {
      drawMarkersMingCornflower();
    } else if (playerOne == "sunset" && playerTwo == "fire") {
      drawMarkersSunsetFire();
    } else if (playerOne == "sunset" && playerTwo == "honeysuckle") {
      drawMarkersSunsetHoneysuckle();
    } else if (playerOne == "sunset" && playerTwo == "ming") {
      drawMarkersSunsetMing();
    } else if (playerOne == "sunset" && playerTwo == "sunset") {
      drawMarkersSunsetSunset();
    } else if (playerOne == "sunset" && playerTwo == "cornflower") {
      drawMarkersSunsetCornflower();
    }

    // Check if anyone has won
    checkResult();
  }
}

// Create function for drawing player markers
function drawMarkersCornflowerCornflower() {
  // Iterate over rows
  for (let row = 0; row < 3; row++) {
    // Iterate over columns
    for (let col = 0; col < 3; col++) {
      // Check if it is player 1's marker
      if (boardData[row][col] == 1) {
        // Update cell class to add a cross
        cellElements[(row * 3) + col].classList.add("crossCornflower");
      } else if (boardData[row][col] == -1) {
        // Update cell class to add a circle
        cellElements[(row * 3) + col].classList.add("circleCornflower");
      }
    }
  }
}

function drawMarkersCornflowerFire() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossCornflower");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleFire");
      }
    }
  }
}

function drawMarkersCornflowerHoneysuckle() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossCornflower");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleHoneysuckle");
      }
    }
  }
}

function drawMarkersCornflowerMing() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossCornflower");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleMing");
      }
    }
  }
}

function drawMarkersCornflowerSunset() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossCornflower");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleSunset");
      }
    }
  }
}

function drawMarkersFireCornflower() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossFire");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleCornflower");
      }
    }
  }
}

function drawMarkersFireFire() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossFire");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleFire");
      }
    }
  }
}

function drawMarkersFireHoneysuckle() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossFire");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleHoneysuckle");
      }
    }
  }
}

function drawMarkersFireMing() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossFire");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleMing");
      }
    }
  }
}

function drawMarkersFireSunset() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossFire");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleSunset");
      }
    }
  }
}

function drawMarkersHoneysuckleFire() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossHoneysuckle");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleFire");
      }
    }
  }
}

function drawMarkersHoneysuckleHoneysuckle() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossHoneysuckle");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleHoneysuckle");
      }
    }
  }
}

function drawMarkersHoneysuckleMing() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossHoneysucke");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleMing");
      }
    }
  }
}

function drawMarkersHoneysuckleSunset() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossHoneysuckle");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleSunset");
      }
    }
  }
}

function drawMarkersHoneysuckleCornflower() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossHoneysuckle");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleCornflower");
      }
    }
  }
}

function drawMarkersMingFire() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossMing");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleFire");
      }
    }
  }
}

function drawMarkersMingHoneysuckle() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossMing");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleHoneysuckle");
      }
    }
  }
}

function drawMarkersMingMing() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossMing");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleMing");
      }
    }
  }
}

function drawMarkersMingSunset() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossMing");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleSunset");
      }
    }
  }
}

function drawMarkersMingCornflower() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossMing");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleCornflower");
      }
    }
  }
}

function drawMarkersSunsetFire() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossSunset");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleFire");
      }
    }
  }
}

function drawMarkersSunsetHoneysuckle() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossSunset");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleHoneysuckle");
      }
    }
  }
}

function drawMarkersSunsetMing() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossSunset");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleMing");
      }
    }
  }
}

function drawMarkersSunsetSunset() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossSunset");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleSunset");
      }
    }
  }
}

function drawMarkersSunsetCornflower() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] == 1) {
        cellElements[(row * 3) + col].classList.add("crossSunset");
      } else if (boardData[row][col] == -1) {
        cellElements[(row * 3) + col].classList.add("circleCornflower");
      }
    }
  }
}

// Create function for checking the result of the game
function checkResult() {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
    let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
    if (rowSum == 3 || colSum == 3) {
      // Player 1 wins
      endGame(playerOneName, 1);
      return
    } else if (rowSum == -3 || colSum == -3) {
      // Player 2 wins
      endGame(playerTwoName, 2);
      return
    }
  }

  // Check diagonals
  let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
  let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
  if (diagonalSum1 == 3 || diagonalSum2 == 3) {
    // Player 1 wins
    endGame(playerOneName, 1);
    return
  } else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
    // Player 2 wins
    endGame(playerTwoName, 2);
    return
  }

  // Check for a tie
  if (boardData[0].indexOf(0) == -1 &&
    boardData[1].indexOf(0) == -1 &&
    boardData[2].indexOf(0) == -1) {
    endGame(0, 0);
    return
  }
}

function restartGame() {
  boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  player = 1;

  gameOver = false;

  resultElement.innerText = "";

  roundNumberHeading.innerText = `Round ${i}`;

  playerOneScoreHeading.innerText = `${playerOneWins}`;

  playerTwoScoreHeading.innerText = `${playerTwoWins}`;

  cellElements.forEach(cell => {
    cell.classList.remove("crossSunset", "crossCornflower", "crossFire", "crossHoneysuckle", "crossMing", "circleSunset", "circleCornflower", "circleFire", "circleHoneysuckle", "circleMing");
  });
}

function restartGameButton() {
  boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  player = 1;

  gameOver = false;

  i = 1;

  playerOneWins = 0;

  playerTwoWins = 0;

  resultElement.innerText = "";

  roundNumberHeading.innerText = `Round ${i}`;

  playerOneScoreHeading.innerText = `${playerOneWins}`;

  playerTwoScoreHeading.innerText = `${playerTwoWins}`;


  cellElements.forEach(cell => {
    cell.classList.remove("crossSunset", "crossCornflower", "crossFire", "crossHoneysuckle", "crossMing", "circleSunset", "circleCornflower", "circleFire", "circleHoneysuckle", "circleMing");
  });
}

// Function to end the game and display the result
function endGame(winner, number) {
  // Trigger game over
  gameOver = true;

  if (i < numberOfRounds) {
    // && ((playerOneWins + 1 < (numberOfRounds / 2)) || (playerTwoWins + 1 < (numberOfRounds / 2)))
    // Check if game ended in a tie 
    if (winner == 0) {
      resultElement.innerText = `Round ${i} is a Draw!`;
    } else {
      resultElement.innerText = `${winner} wins Round ${i}!`;
      if (number == 1) {
        playerOneWins++;
        playerOneScoreHeading.innerText = `${playerOneWins}`;
      } else if (number == 2) {
        playerTwoWins++;
        playerTwoScoreHeading.innerText = `${playerTwoWins}`;
      }
    }
    i++;
    setTimeout(function () {
      restartGame();
    }, 2000);
  } else {
    if (number == 1) {
      playerOneWins++;
      playerOneScoreHeading.innerText = `${playerOneWins}`;
    } else if (number == 2) {
      playerTwoWins++;
      playerTwoScoreHeading.innerText = `${playerTwoWins}`;
    }
    if (playerOneWins == playerTwoWins) {
      resultElement.innerText = `Both are equally strong :)`;
    } else if (playerOneWins > playerTwoWins) {
      resultElement.innerText = `${playerOneName} wins the tournament!`;
    } else if (playerOneWins < playerTwoWins) {
      resultElement.innerText = `${playerTwoName} wins the tournament!`;
    }
  }
}