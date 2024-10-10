const inputTime = document.getElementById("inputTime");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");

let timer;
let sec = 10;

setTime.addEventListener("click", function () {
  sec = inputTime.value;
  nowTime.textContent = `${sec}：セット完了です`;
});

const countDown = function () {
  sec -= 1;
  nowTime.textContent = sec;
  if (sec === 0) {
    clearInterval(timer);
    alert("終了");
    sec = 0;
  }
};

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countDown()", 1000);
});

stopTimer.addEventListener("click", function () {
  clearInterval(timer);
  nowTime.textContent = `${sec}：ストップしました`;
});
