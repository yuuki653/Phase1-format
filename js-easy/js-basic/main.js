// 値

// 数値
console.log(100);
console.log(1.5);

// 文字列 　※''又は""を付ける
console.log("ありがとう");
console.log("Hello");

// 配列
console.log([1, 2, 3, 4, 5]);

// 真偽値
console.log(true);
console.log(false);

// オブジェクト
console.log({ one: 1, two: 2 });

// 変数
const myName = "Takanohashi";
// const 名前 = 値

console.log(myName);
// 変数(myName)に値'Takanohashi'を代入する

const number = 100;
const isValid = true;
const userIds = [1, 3, 10];

console.log(number);
console.log(isValid);
console.log(userIds);

let learning;

learning = "Ruby";

console.log(learning);

// 文字列処理
// ("これは文字列です");
// ("これも文字列です");
// 状況によって使い分ける;
// ("I'm Takanohashi Yuuki.");

// 文字列の結合
const breakfast = "納豆";

console.log("今日の朝ご飯は" + breakfast + "でした。\nとてもおいしかった。");

// テンプレート文字列
console.log(`今日の朝ご飯は${breakfast}でした。
    とてもおいしかった。`);

// 配列
const days = ["日", "月", "火", "水", "木", "金", "土"];

console.log(days[3]);

console.log(days.length);

// 配列の操作
const nengou = ["明治", "大正", "昭和", "平成"];
console.log(nengou);

// 要素の追加
nengou.push("令和");
console.log(nengou);

nengou.splice(3, 1);
console.log(nengou);

nengou[2] = "しょうわ";
console.log(nengou);

// 条件分岐
const num = Math.random();

if (num >= 0.5) {
  console.log("大きめ");
} else {
  console.log("小さめ");
}

console.log(`数:${num}`);

// 真偽値(if分のより厳密な挙動)
if (num >= 0.5) {
  console.log("条件はtrueです！");
} else {
  console.log("条件はfalseです！");
}

console.log(`数:${num}`);

const a = 2;
const b = 3;
const c = 10;
const d = 10;

console.log(a === b);
console.log(c === d);

console.log(a === b && c === d);
console.log(a === b || c === d);
console.log(!(a === b));

// ループ for文
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// ループ　while文
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let s = 2;

while (s < 100000) {
  console.log(s);
  s = s * s;
}

// 定義
function cook(food1, food2) {
  console.log(`${food2}が出来上がりました。`);
  console.log(`${food1}が出来上がりました。`);
}

// 実行
cook("生姜焼き", "カレー");
cook("シチュー", "ハンバーグ");

function applyTax(price) {
  return price * 1.1;
}

// const result1 = applyTax(1000);
// const result2 = applyTax(580);

// console.log(result1 + result2);

// const applyTax = function (price) {
//   return price * 1.1;
// };

// アロー関数
// const applyTax = (price) => {
//   return price * 1.1;
// };

console.log(`100-1=${100 - 1}`);

const numArray = [1, 2, 3, 4, 5];
console.log(numArray[1]);

const numObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(b);

const foo = () => {
  console.log("fooが呼び出された");
};

// function foo(a, b, c) {
//   console.log(`fooが引数${a}, ${b}, ${c}で呼び出された`);
// }

foo();
