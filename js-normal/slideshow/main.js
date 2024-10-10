const btn = document.getElementById("pushBtn");
const viewImg = document.getElementById("viewImg");

const data = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];

let imgNum = 0;
btn.textContent = data[imgNum].text;
viewImg.setAttribute("src", data[imgNum].img);

btn.addEventListener("click", function () {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  viewImg.setAttribute("src", data[imgNum].img);
  btn.textContent = data[imgNum].text;
});

const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", function () {
  imgNum = document.getElementById("seasonNum").value;
  viewImg.setAttribute("src", data[imgNum].img);
  btn.textContent = data[imgNum].text;
});
