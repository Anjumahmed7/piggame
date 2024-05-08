'use strict';

// Selecting Elements
// const score0 = document.querySelector("#score--0");
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const currentScoreE0 = document.querySelector('#current--0');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore = document.querySelector('.current-score');
const currentScore1 = document.querySelector('#current--1');
const currentScore0 = document.querySelector('#current--0');

// universal variables
let currentScoreVar0 = 0;
let currentScoreVar1 = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

// starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
diceEl.classList.add('hidden');

// Functions

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScoreVar0 = 0;
  scores = [0, 0];
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
init();

const switchFunction = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScoreVar0 = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// buttons and event listeners

rollDiceButton.addEventListener('click', () => {
  if (playing) {
    const dice = Number(Math.trunc(Math.random() * 6 + 1));
    diceEl.classList.remove('hidden');
    // console.log(dice);
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      //  add dice to current score
      currentScoreVar0 += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScoreVar0;

      // console.log(currentScoreVar0);
      // currentScoreE0.textContent = currentScoreVar0;
    } else {
      // switch
      switchFunction();
    }
  } else {
    console.log('Not paying');
  }
});

holdButton.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScoreVar0;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchFunction();
    }
  } else {
    console.log('not playing');
  }
});

newGameButton.addEventListener('click', () => {
  init();
});
