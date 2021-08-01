const startBtn = document.querySelector('#id-start');
const screens = document.querySelectorAll('.screen');
const timeBtns = document.querySelector('#id-time-list');
const timeEl = document.querySelector('#id-time');
const board = document.querySelector('#id-board');

let time = 11;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
})

timeBtns.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    let time = +(event.target.getAttribute('data-time'));
    startGame();
  }
})

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();

  }
})

startGame();

function startGame() {
  setInterval(decreaseTime, 1000);
  creatRandomCircles();
  screens[1].classList.add('up');
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  }
  else {
    let curentTime = --time;
    if (curentTime < 10) {
      curentTime = `0${curentTime}`;
    }
    setTime(curentTime);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {

}

function creatRandomCircles() {
  const circle = document.createElement('div');
  const size = getRandomSize(10, 60);

  // const { width, height } = board.getBoundingClientRect();
  // const x = getRandomSize(0, width - size);
  // const y = getRandomSize(0, height - size);
  /*
    an alternative option without using 'getBoundingClientRect()'
  */
  const boardWidth = board.clientWidth;
  const boardHeight = board.clientHeight;

  const x = getRandomSize(0, boardWidth - size);
  const y = getRandomSize(0, boardHeight - size);
  /* -----------  */

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  board.append(circle);
}

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}