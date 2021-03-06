const startBtn = document.querySelector('#id-start');
const screens = document.querySelectorAll('.screen');
const timeBtns = document.querySelector('#id-time-list');
const timeEl = document.querySelector('#id-time');
const board = document.querySelector('#id-board');

const colors = ['#d33e9e', '#8e44ad', '#74b8e5', '#d9ac83', '#2ecc71', '#cd1c1c'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
})

timeBtns.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = +(event.target.getAttribute('data-time'));
    startGame();
  }
})

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    creatRandomCircles();
  }
})

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
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h2>Игра закончина <br>
  Вы набрали: <span class="primary">${score}</span> очков</h2>`;
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

  const color = getRandomColor();

  circle.classList.add('circle');

  circle.style.backgroundColor = color;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);

}

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}