const input = document.getElementById("sampleForm");
const countNum = document.getElementById("textCounter");
const reset = document.getElementById("resetBtn");
const goalNum = 400;
countNum.textContent = `あと${goalNum - input.value.length}文字`;
let textarea;

input.addEventListener("keyup", function () {
  countNum.textContent = `あと${goalNum - input.value.length}文字`;
  textarea = input.value;
});

reset.addEventListener("click", function () {
  countNum.textContent = `あと${goalNum}文字`;
  textarea = "";
});

const iniDel = document.getElementById("iniDel");
const endDel = document.getElementById("endDel");

iniDel.addEventListener("click", function () {
  textarea = textarea.slice(1);
  input.value = textarea;
  countNum.textContent = `あと${goalNum - input.value.length}文字`;
});

endDel.addEventListener("click", function () {
  textarea = textarea.slice(0, -1);
  input.value = textarea;
  countNum.textContent = `あと${goalNum - input.value.length}文字`;
});
