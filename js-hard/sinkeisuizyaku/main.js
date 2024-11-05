const panel = document.getElementById("panel");

// 配列を作成
let beforeArr = [1, 1, 2, 2, 3, 3, 4, 4];
let afterArr = [];

for (let i = 0; i < 8; i++) {
  let r = Math.floor(Math.random() * beforeArr.length);
  afterArr.push(beforeArr[r]);
  beforeArr.splice(r, 1);
  console.log(beforeArr);
  console.log(afterArr);
}

// const turn = function () {
//   cards.className = "card";
// };

// divタグを作成
afterArr.forEach((data) => {
  const card = document.createElement("div");
  panel.appendChild(card);
  card.className = "card back";
  card.textContent = "";
  card.onclick = function () {
    card.className = "card";
  };
});

const cards = document.querySelectorAll(".card.back");

// カードがクリックされたときの処理
