const startBtn = document.querySelector('#id-start');
const screens = document.querySelectorAll('.screen');
const timeBtns = document.querySelector('#id-time-list');
const timeEl = document.querySelector('#id-time');

let time = 11;

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

startGame();

function startGame() {
  setInterval(decriaseTime, 1000)
  screens[1].classList.add('up');
  timeEl.innerHTML = `00:${time}`;
}

function decriaseTime() {
  let curentTime = --time;
  if (curentTime < 10) {
    curentTime = `0${curentTime}`;
  }
  timeEl.innerHTML = `00:${curentTime}`;
}

// let curentTime = --time;
//   