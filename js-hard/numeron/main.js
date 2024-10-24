const checkNum = document.getElementById("answerNum");
const checkBtn = document.getElementById("numCheck");

const answerArr = [];
const randomNum = function () {
  answerArr[0] = Math.floor(Math.random() * 10);
  do {
    answerArr[1] = Math.floor(Math.random() * 10);
  } while (answerArr[0] === answerArr[1]);
  do {
    answerArr[2] = Math.floor(Math.random() * 10);
  } while (answerArr[0] === answerArr[2] || answerArr[1] === answerArr[2]);
  console.log(answerArr);
};
randomNum();

checkBtn.addEventListener("click", function () {
  const num = checkNum.value;
  const checkArr = Array.from(String(num), Number);
  let eat = 0;

  let bite = 0;

  if (checkArr.length !== 3) {
    alert("3桁で入力してください");
    return;
  }
  if (
    checkArr[0] === checkArr[1] ||
    checkArr[0] === checkArr[2] ||
    checkArr[1] === checkArr[2]
  ) {
    alert("異なる数字で入力してください");
    return;
  }
  if (
    answerArr[0] === checkArr[0] &&
    answerArr[1] === checkArr[1] &&
    answerArr[2] === checkArr[2]
  ) {
    alert("正解");
    randomNum();
    return;
  }

  for (let i = 0; i < checkArr.length; i++) {
    for (let a = 0; a < answerArr.length; a++) {
      if (checkArr[i] === answerArr[a]) {
        if (i === a) {
          eat = eat + 1;
        } else {
          BarPropite = bite + 1;
        }

        alert(`${eat}EAT ${bite}BITE`);
      }
    }
  }

  console.log(checkArr);
  console.log(eat, bite);
});
