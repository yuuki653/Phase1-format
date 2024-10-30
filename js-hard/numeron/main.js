// const checkNum = document.getElementById("answerNum");
// const checkBtn = document.getElementById("numCheck");

// let answerArr = [];
// const randomNum = function () {
//   answerArr = [];
//   while (answerArr.length < 3) {
//     Num = Math.floor(Math.random() * 10);
//     if (!answerArr.includes(Num)) {
//       answerArr.push(Num);
//     }
//   }
//   console.log(answerArr);
// };
// // const randomNum = function () {
// //   answerArr[0] = Math.floor(Math.random() * 10);
// //   do {
// //     answerArr[1] = Math.floor(Math.random() * 10);
// //   } while (answerArr[0] === answerArr[1]);
// //   do {
// //     answerArr[2] = Math.floor(Math.random() * 10);
// //   } while (answerArr[0] === answerArr[2] || answerArr[1] === answerArr[2]);
// //   console.log(answerArr);
// // };

// randomNum();

// checkBtn.addEventListener("click", function () {
//   const num = checkNum.value;
//   const checkArr = Array.from(String(num), Number);
//   console.log(checkArr);
//   let eat = 0;
//   let bite = 0;

//   if (checkArr.length !== 3) {
//     alert("3桁で入力してください");
//     checkNum.value = "";
//     return;
//   }

//   const arrSet = Array.from(new Set(checkArr));
//   if (arrSet.length !== 3) {
//     alert("異なる数字で入力してください");
//     checkNum.value = "";
//     console.log(arrSet);
//     return;
//   }

//   for (let i = 0; i < checkArr.length; i++) {
//     for (let a = 0; a < answerArr.length; a++) {
//       if (checkArr[i] === answerArr[a]) {
//         if (i === a) {
//           eat = eat + 1;
//         } else {
//           bite = bite + 1;
//         }
//       }
//     }
//   }
//   console.log(eat, bite);

//   alert(`${eat}EAT ${bite}BITE`);
//   checkNum.value = "";

//   if (eat === 3) {
//     alert("正解");
//     checkNum.value = "";
//     randomNum();
//   }
// });

// チャレンジ問題

const checkNum = document.getElementById("answerNum");
const checkBtn = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn");

let answerArr = [];
const randomNum = function () {
  answerArr = [];
  while (answerArr.length < 3) {
    Num = Math.floor(Math.random() * 10);
    if (!answerArr.includes(Num)) {
      answerArr.push(Num);
    }
  }
  console.log(answerArr);
};

let turn = 10;
remainTurn.textContent = `あと残り${turn}回です`;
console.log(turn);
randomNum();

checkBtn.addEventListener("click", function () {
  const num = checkNum.value;
  const checkArr = Array.from(String(num), Number);
  console.log(checkArr);
  let eat = 0;
  let bite = 0;

  if (checkArr.length !== 3) {
    alert("3桁で入力してください");
    checkNum.value = "";
    return;
  }

  const arrSet = Array.from(new Set(checkArr));
  if (arrSet.length !== 3) {
    alert("異なる数字で入力してください");
    checkNum.value = "";
    console.log(arrSet);
    return;
  }

  for (let i = 0; i < checkArr.length; i++) {
    for (let a = 0; a < answerArr.length; a++) {
      if (checkArr[i] === answerArr[a]) {
        if (i === a) {
          eat = eat + 1;
        } else {
          bite = bite + 1;
        }
      }
    }
  }
  console.log(eat, bite);

  alert(`${eat}EAT ${bite}BITE`);
  checkNum.value = "";

  if (eat === 3) {
    alert("正解");
    checkNum.value = "";
    randomNum();
    turn = 11;
  }

  turn -= 1;
  if (turn > 0) {
    remainTurn.textContent = `あと残り${turn}回です。`;
    console.log(turn);
    return;
  }
  if (turn === 0) {
    remainTurn.textContent = `終了です。答えは【${answerArr.join(
      ""
    )}】でした。`;
    checkNum.disabled = true;
    checkBtn.disabled = true;
    console.log(turn);
  }
  // if (turn === 0) {
  //   remainTurn.textContent = `終了です。答えは【${answerArr.join(
  //     ""
  //   )}】でした。`;
  //   console.log(turn);
  // } else {
  //   remainTurn.textContent = `あと残り${turn}回です。`;
  //   console.log(turn);
  // }
});
