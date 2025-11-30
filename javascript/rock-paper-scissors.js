let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElem();

function pickMove() {
  const randomNum = Math.random();

  let computerMove = '';

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = 'rock';
  }
  if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = 'paper';
  }
  if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose.';
    } else if (computerMove === 'paper') {
      result = 'You Win.';
    } else {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You Lose.';
    }

  } else {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
    } else {
      result = 'You Win.';
    }

  }

  if (result === 'You Win.') {
    score.wins++;
  } else if (result === 'Tie.') {
    score.ties++;
  } else {
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElem();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-emoji"> <img src="images/${computerMove}-emoji.png"
      class="move-emoji"> Computer`;

  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

}
function updateScoreElem() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateScoreElem();
}