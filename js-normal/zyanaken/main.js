const myHand = document.getElementById("myHand");
const cpHand = document.getElementById("cpHand");
const log = document.getElementById("log");
const gameStart = document.getElementById("gameStart");

cpHand.textContent = "相手の手：";
log.textContent = "結果：";

gameStart.addEventListener("click", function () {
  const myNum = myHand.value;
  const cpNum = Math.floor(Math.random() * 3);

  if (cpNum === 0) {
    cpHand.textContent = "相手の手：グー";
  } else if (cpNum === 1) {
    cpHand.textContent = "相手の手：チョキ";
  } else if (cpNum === 2) {
    cpHand.textContent = "相手の手：パー";
  }

  switch (myNum) {
    case "0": {
      if (cpNum === 0) {
        log.textContent = "結果：あいこ";
      } else if (cpNum === 1) {
        log.textContent = "結果：勝ち";
      } else if (cpNum === 2) {
        log.textContent = "結果：負け";
      }
      break;
    }
    case "1": {
      if (cpNum === 0) {
        log.textContent = "結果：負け";
      } else if (cpNum === 1) {
        log.textContent = "結果：あいこ";
      } else if (cpNum === 2) {
        log.textContent = "結果：勝ち";
      }
      break;
    }
    case "2": {
      if (cpNum === 0) {
        log.textContent = "結果：負け";
      } else if (cpNum === 1) {
        log.textContent = "結果：勝ち";
      } else if (cpNum === 2) {
        log.textContent = "結果：あいこ";
      }
      break;
    }
  }
});
