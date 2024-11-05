// const sheet = document.getElementById("view");

// // BINGO列
// let bingo_Arr = ["B", "I", "N", "G", "O"];
// const tr = document.createElement("tr");
// sheet.appendChild(tr);

// for (let i = 0; i < bingo_Arr.length; i++) {
//   const td = document.createElement("td");
//   tr.appendChild(td);
//   td.textContent = bingo_Arr[i];
//   td.classList.add("bingo");
// }

// // 数字列
// let arr = [];
// for (let col = 0; col < 5; col++) {
//   let array = [];
//   while (array.length < 5) {
//     let num = Math.floor(Math.random() * 15 + (15 * col + 1));
//     if (!array.includes(num)) {
//       array.push(num);
//     }
//   }
//   arr.push(array);
// }
// arr[2][2] = "free";

// console.log(arr);

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

// const opened = document.getElementsByClassName("td")[12];
// opened.classList.toggle("opened");

// チャレンジ問題
const sheet = document.getElementById("view");
const set = document.getElementById("hitNum");

// BINGO列
let bingo_Arr = ["B", "I", "N", "G", "O"];
const tr = document.createElement("tr");
sheet.appendChild(tr);

for (let i = 0; i < bingo_Arr.length; i++) {
  const td = document.createElement("td");
  tr.appendChild(td);
  td.textContent = bingo_Arr[i];
  td.classList.add("bingo");
}

// 数字列
let arr = [];
for (let col = 0; col < 5; col++) {
  let array = [];
  while (array.length < 5) {
    let num = Math.floor(Math.random() * 15 + (15 * col + 1));
    if (!array.includes(num)) {
      array.push(num);
    }
  }
  arr.push(array);
}
arr[2][2] = "free";

console.log(arr);

for (let row = 0; row < 5; row++) {
  const tr = document.createElement("tr");
  sheet.appendChild(tr);
  for (let col = 0; col < 5; col++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = arr[col][row];
    td.className = "normal";
  }
}

const opened = document.getElementsByClassName("normal")[12];
opened.classList.toggle("opened");

const tds = document.getElementsByClassName("normal");
console.log(tds);
console.log(Array.from(tds));

const chooseArr = [...Array(75)].map((_, i) => i + 1);
console.log(chooseArr);

set.addEventListener("click", function () {
  if (chooseArr.length > 0) {
    let index = Math.floor(Math.random() * chooseArr.length);
    let searchNum = chooseArr[index];
    alert(`${searchNum}番`);
    chooseArr.splice(index, 1);
    console.log(chooseArr);

    // const searchNum = 10;
    // alert(`${searchNum}番`);

    const foundTd = Array.from(tds).find(
      (normal) => normal.textContent === String(searchNum)
    );
    console.log(foundTd);

    if (foundTd) {
      foundTd.classList.toggle("opened");
    }
  } else {
    alert("全ての数字を出しました");
  }
});
