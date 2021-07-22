const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let intervalId = null;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick(e) {
  e.currentTarget.disabled = true;
  intervalId = setInterval(changeBgColor, 1000, colors);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeBgColor(colorsArr) {
  let color = colorsArr[randomIntegerFromInterval(0, colorsArr.length - 1)];
  document.body.style.backgroundColor = color;
}
