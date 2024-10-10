let timer;
let sec = 0;

const confirmTime = document.getElementById("confirmTime");
const startTimer = document.getElementById("startTimer");

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countUp()", 1000);
});

const countUp = function () {
  sec += 1;
  if (sec === 40) {
    clearInterval(timer);
    alert("終了");
    sec = 0;
  }
};

confirmTime.addEventListener("click", function () {
  if (sec === 20) {
    alert("大正解！");
  } else if (sec < 20) {
    alert(`まだ${sec}秒`);
  } else {
    alert(`もう${sec}秒`);
  }
  clearInterval(timer);
  sec = 0;
});
