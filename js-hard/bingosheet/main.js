const sheet = document.getElementById("view");

// 1列
let B_Arr = [];
const setB = function () {
  B_Arr = [];
  while (B_Arr.length < 5) {
    let num = Math.floor(Math.random() * (16 - 1) + 1);

    if (!B_Arr.includes(num)) {
      B_Arr.push(num);
    }
  }
};

// // 2列
let I_Arr = [];
const setI = function () {
  I_Arr = [];
  while (I_Arr.length < 5) {
    let num = Math.floor(Math.random() * (31 - 16) + 16);

    if (!I_Arr.includes(num)) {
      I_Arr.push(num);
    }
  }
};

// // 3列
let N_Arr = [];
const setN = function () {
  N_Arr = [];
  while (N_Arr.length < 5) {
    let num = Math.floor(Math.random() * (46 - 31) + 31);

    if (!N_Arr.includes(num)) {
      N_Arr.push(num);
    }
  }
};

// // 4列
let G_Arr = [];
const setG = function () {
  G_Arr = [];
  while (G_Arr.length < 5) {
    let num = Math.floor(Math.random() * (61 - 46) + 46);

    if (!G_Arr.includes(num)) {
      G_Arr.push(num);
    }
  }
};

// // 5列
let O_Arr = [];
const setO = function () {
  O_Arr = [];
  while (O_Arr.length < 5) {
    let num = Math.floor(Math.random() * (76 - 61) + 61);

    if (!O_Arr.includes(num)) {
      O_Arr.push(num);
    }
  }
};

setB();
console.log(B_Arr);
setI();
console.log(I_Arr);
setN();
N_Arr[2] = "free";
console.log(N_Arr);
setG();
console.log(G_Arr);
setO();
console.log(O_Arr);

const arr = [];
arr[0] = B_Arr;
arr[1] = I_Arr;
arr[2] = N_Arr;
arr[3] = G_Arr;
arr[4] = O_Arr;

console.log(arr);

// BINGO列;
const col = document.createElement("tr");
sheet.appendChild(col);

let bingo_Arr = ["B", "I", "N", "G", "O"];
for (let i = 0; i < bingo_Arr.length; i++) {
  const sq = document.createElement("td");
  col.appendChild(sq);
  sq.textContent = bingo_Arr[i];
  sq.classList.add("bingo");
}

for (let row = 0; row < 5; row++) {
  const tr = document.createElement("tr");
  sheet.appendChild(tr);
  for (let col = 0; col < 5; col++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = arr[col][row];
    td.className = "td";
  }
}

const opened = document.getElementsByClassName("td")[12];
opened.classList.toggle("opened");

// チャレンジ問題
// const sheet = document.getElementById("view");
// const set = document.getElementById("hitNum");

// // 1列
// let B_Arr = [];
// const setB = function () {
//   B_Arr = [];
//   while (B_Arr.length < 5) {
//     let num = Math.floor(Math.random() * (16 - 1) + 1);

//     if (!B_Arr.includes(num)) {
//       B_Arr.push(num);
//     }
//   }
// };

// // // 2列
// let I_Arr = [];
// const setI = function () {
//   I_Arr = [];
//   while (I_Arr.length < 5) {
//     let num = Math.floor(Math.random() * (31 - 16) + 16);

//     if (!I_Arr.includes(num)) {
//       I_Arr.push(num);
//     }
//   }
// };

// // // 3列
// let N_Arr = [];
// const setN = function () {
//   N_Arr = [];
//   while (N_Arr.length < 5) {
//     let num = Math.floor(Math.random() * (46 - 31) + 31);

//     if (!N_Arr.includes(num)) {
//       N_Arr.push(num);
//     }
//   }
// };

// // // 4列
// let G_Arr = [];
// const setG = function () {
//   G_Arr = [];
//   while (G_Arr.length < 5) {
//     let num = Math.floor(Math.random() * (61 - 46) + 46);

//     if (!G_Arr.includes(num)) {
//       G_Arr.push(num);
//     }
//   }
// };

// // // 5列
// let O_Arr = [];
// const setO = function () {
//   O_Arr = [];
//   while (O_Arr.length < 5) {
//     let num = Math.floor(Math.random() * (76 - 61) + 61);

//     if (!O_Arr.includes(num)) {
//       O_Arr.push(num);
//     }
//   }
// };

// setB();
// console.log(B_Arr);
// setI();
// console.log(I_Arr);
// setN();
// N_Arr[2] = "free";
// console.log(N_Arr);
// setG();
// console.log(G_Arr);
// setO();
// console.log(O_Arr);

// const arr = [];
// arr[0] = B_Arr;
// arr[1] = I_Arr;
// arr[2] = N_Arr;
// arr[3] = G_Arr;
// arr[4] = O_Arr;

// console.log(arr);

// // BINGO列;
// const col = document.createElement("tr");
// sheet.appendChild(col);

// let bingo_Arr = ["B", "I", "N", "G", "O"];
// for (let i = 0; i < bingo_Arr.length; i++) {
//   const sq = document.createElement("td");
//   col.appendChild(sq);
//   sq.textContent = bingo_Arr[i];
//   sq.classList.add("bingo");
// }

// // 数字列
// for (let row = 0; row < 5; row++) {
//   const tr = document.createElement("tr");
//   sheet.appendChild(tr);
//   for (let col = 0; col < 5; col++) {
//     const td = document.createElement("td");
//     tr.appendChild(td);
//     td.textContent = arr[col][row];
//     td.className = "td";
//   }
// }

// const closed = document.getElementsByClassName("td");
// const opened = document.getElementsByClassName("td")[12];
// opened.classList.toggle("opened");

// set.addEventListener("click", function () {
//   let num = Math.floor(Math.random() * 10);
//   alert(`数字は${num}番です！`);
// });
