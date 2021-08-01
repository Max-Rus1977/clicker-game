const startBtn = document.querySelector('#id-start');
const screens = document.querySelectorAll('.screen');
const timeBtns = document.querySelector('#id-time-list');

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
})

timeBtns.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    console.log(event.target.getAttribute('data-time'));
  }
})
