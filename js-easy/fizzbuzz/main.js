// 1～20までループ
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// 条件式
// if (i % 3 === 0 && i % 5 === 0) {
//   console.log("fizzbuzz");
// } else if (i % 3 === 0) {
//   console.log("fizz");
// } else if (i % 5 === 0) {
//   console.log("buzz");
// } else {
//   console.log(i);
// }

// 合わせる
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// チャレンジ
// let v = 0;
// const Num = document.getElementById("rewriteNum");
// Num.innerHTML = v;

// const rewriteCntUp = function () {
//   v += 1;
//   if (v % 3 === 0 && v % 5 === 0) {
//     Num.innerHTML = "fizzbuzz";
//   } else if (v % 3 === 0) {
//     Num.innerHTML = "fizz";
//   } else if (v % 5 === 0) {
//     Num.innerHTML = "buzz";
//   } else {
//     Num.innerHTML = v;
//   }
// };

// 追加チャレンジ
let i = 0;
const showNum = document.getElementById("showNum");
showNum.innerHTML = i;

const fizzBtn = function () {
  i += 1;
  if (i % 3 === 0) {
    showNum.innerHTML = "fizz";
  } else {
    alert("ちがう");
    location.reload();
  }
};

const buzzBtn = function () {
  i += 1;
  if (i % 5 === 0) {
    showNum.innerHTML = "buzz";
  } else {
    alert("ちがう");
    location.reload();
  }
};

const fizzbuzzBtn = function () {
  i += 1;
  if (i % 3 === 0 && i % 5 === 0) {
    showNum.innerHTML = "fizzbuzz";
  } else {
    alert("ちがう");
    location.reload();
  }
};

const numBtn = function () {
  i += 1;
  if (i % 3 === 0 || i % 5 === 0) {
    alert("ちがう");
    location.reload();
  } else {
    showNum.innerHTML = i;
  }
};
