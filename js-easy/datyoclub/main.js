// let cntPerson = 0;

// const cntUp = function count() {
//   cntPerson += 1;
//   console.log(cntPerson);
// };

// const reply = function () {
//   const word = "どうぞどうぞ";
//   const action = word.repeat(cntPerson);
//   alert(action);
//   cntPerson = 0;
// };

// チャレンジ
let cntPerson = 0;
const count = document.getElementById("count");
count.innerHTML = cntPerson;

const cntUp = function () {
  cntPerson += 1;
  console.log(cntPerson);
  count.innerHTML = cntPerson;
};

const cntDown = function () {
  cntPerson -= 1;
  console.log(cntPerson);
  count.innerHTML = cntPerson;
  if (cntPerson < 0) {
    alert("もう誰もいない…");
    cntPerson = 0;
  }
};

const reply = function () {
  const word1 = "どうぞどうぞ";
  const word2 = "誰もいない…";
  const action = word1.repeat(cntPerson);
  if (cntPerson > 0) {
    alert(action);
  } else {
    alert(word2);
  }
  cntPerson = 0;
};
