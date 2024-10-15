const nowNum1 = document.getElementById("nowNum1");
const nowNum2 = document.getElementById("nowNum2");
const nowNum3 = document.getElementById("nowNum3");
const stop1 = document.getElementById("stop1");
const stop2 = document.getElementById("stop2");
const stop3 = document.getElementById("stop3");
const start = document.getElementById("hitNum");

let slot1;
let slot2;
let slot3;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let stopSlot = [0, 0, 0];
let result = [0, 0, 0];

nowNum1.textContent = num1;
nowNum2.textContent = num2;
nowNum3.textContent = num3;

start.addEventListener("click", function () {
  slot1 = setInterval("countMove1()", 1000);
});
start.addEventListener("click", function () {
  slot2 = setInterval("countMove2()", 1000);
});
start.addEventListener("click", function () {
  slot3 = setInterval("countMove3()", 1000);
});

const countMove1 = function () {
  num1 += 1;
  if (num1 > 9) {
    num1 = 0;
  }
  nowNum1.textContent = num1;
  console.log(num1);
};
const countMove2 = function () {
  num2 += 1;
  if (num2 > 9) {
    num2 = 0;
  }
  nowNum2.textContent = num2;
};
const countMove3 = function () {
  num3 += 1;
  if (num3 > 9) {
    num3 = 0;
  }
  nowNum3.textContent = num3;
};

stop1.addEventListener("click", function () {
  clearInterval(slot1);
  result[0] = nowNum1.textContent;
  stopSlot[0] = 1;
  if (stopSlot[0] === 1 && stopSlot2[1] === 1 && stopSlot3[2] === 1) {
    check();
  }
});
stop2.addEventListener("click", function () {
  clearInterval(slot2);
  result[1] = nowNum2.textContent;
  stopSlot[1] = 1;
  if (stopSlot[0] === 1 && stopSlot2[1] === 1 && stopSlot3[2] === 1) {
    check();
  }
});
stop3.addEventListener("click", function () {
  clearInterval(slot3);
  result[2] = nowNum3.textContent;
  stopSlot[2] = 1;
  if (stopSlot[0] === 1 && stopSlot2[1] === 1 && stopSlot3[2] === 1) {
    check();
  }
});

const check = function () {
  if (result[0] === result[1] && result[0] === result[2]) {
    alert("おめでとう！");
  } else {
    alert("残念！");
  }
};
