const nowPW = document.getElementById("nowPassword");
const setPassword = document.getElementById("setPassword");

let PW = "aaaaa";
nowPW.textContent = `現在のパスワード：${PW}`;

setPassword.addEventListener("click", function () {
  const confirmPW = document.getElementById("confirmPassword").value;
  const newPW = document.getElementById("newPassword").value;
  if (PW === confirmPW) {
    if (confirmPW !== newPW) {
      if (newPW.length >= 8) {
        PW = newPW;
        nowPW.textContent = `現在のパスワード：${PW}`;
        alert(`新しいパスワードは${PW}です`);
      } else {
        alert("パスワードは8文字以上にしてください");
      }
    } else {
      alert("パスワードが同じです");
    }
  } else {
    alert("現在のパスワードが間違っています");
  }
});
