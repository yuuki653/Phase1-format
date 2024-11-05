//  slot = [
//   {
//     num: 0,
//     timerId: null,
//     stopBtn: document.getElementById("setTime1"),
//     numViewer: document.getElementById("nowTime"),
//     stopFlag: false,
//   },
//   {
//     num: 0,
//     timerId: null,
//     stopBtn: document.getElementById("setTime2"),
//     numViewer: document.getElementById("nowTime2"),
//     stopFlag: false,
//   },
//   {
//     num: 0,
//     timerId: null,
//     stopBtn: document.getElementById("setTime3"),
//     numViewer: document.getElementById("nowTime3"),
//     stopFlag: false,
//   },
// ];

// const start = document.getElementById("startTimer");

// slot.forEach((column) => {
//   column.numViewer.textContent = column.num;
// });

// const countMove = function (column) {
//   column.num += 1;
//   if (column.num > 9) {
//     column.num = 0;
//   }
//   column.numViewer.textContent = column.num;
// };

// const check = function (column) {
//   if (slot.every((column) => slot[0].num === column.num)) {
//     alert("おめでとう！");
//   } else {
//     alert("残念！");
//   }
// };

// start.addEventListener("click", function () {
//   slot.forEach((column) => {
//     start.disabled = true;
//     column.stopBtn.disabled = false;
//     column.timerId = setInterval(function () {
//       countMove(column);
//     }, 100);
//   });
// });

// slot.forEach((column) => {
//   column.stopBtn.addEventListener("click", function () {
//     clearInterval(column.timerId);
//     column.stopBtn.disabled = true;
//     column.stopFlag = true;
//     if (slot.every((column) => column.stopFlag)) {
//       check();
//       start.disabled = false;
//       slot.forEach((column) => {
//         column.stopFlag = false;
//       });
//     }
//   });
// });

// チャレンジ問題

const game = {
  startBtn: document.getElementById("startTimer"),
  slot: [
    {
      numViewer: [
        { num: 9, element: document.getElementById("nowTime4") },
        { num: 0, element: document.getElementById("nowTime") },
        { num: 1, element: document.getElementById("nowTime7") },
      ],
      stopBtn: document.getElementById("setTime1"),
      timerId: null,
      // stopFlag: false,
    },
    {
      numViewer: [
        { num: 9, element: document.getElementById("nowTime5") },
        { num: 0, element: document.getElementById("nowTime2") },
        { num: 1, element: document.getElementById("nowTime8") },
      ],
      stopBtn: document.getElementById("setTime2"),
      timerId: null,
      // stopFlag: false,
    },
    {
      numViewer: [
        { num: 9, element: document.getElementById("nowTime6") },
        { num: 0, element: document.getElementById("nowTime3") },
        { num: 1, element: document.getElementById("nowTime9") },
      ],
      stopBtn: document.getElementById("setTime3"),
      timerId: null,
      // stopFlag: false,
    },
  ],
};
console.log(game);

game.slot.forEach((column) => {
  column.numViewer.forEach((data) => {
    data.element.textContent = data.num;
    // console.log(column);
    // console.log(data);
  });
});

const check = function () {
  if (
    game.slot[0].numViewer[1].num === game.slot[1].numViewer[1].num &&
    game.slot[0].numViewer[1].num === game.slot[2].numViewer[1].num
  ) {
    alert("おめでとう！");
  } else {
    alert("残念！");
  }
};

const countMove = function (column) {
  console.log("move");

  column.numViewer.forEach((data) => {
    data.num += 1;
    if (data.num > 9) {
      data.num = 0;
    }

    data.element.textContent = data.num;
  });
};

game.startBtn.addEventListener("click", function () {
  game.slot.forEach((column) => {
    game.startBtn.disabled = true;
    column.stopBtn.disabled = false;
    // column.stopFlag = false;
    column.timerId = setInterval(function () {
      countMove(column);
    }, 1000);
  });
});

game.slot.forEach((column) => {
  column.stopBtn.addEventListener("click", function () {
    clearInterval(column.timerId);
    column.stopBtn.disabled = true;
    // column.stopFlag = true;

    if (game.slot.every((column) => column.stopBtn.disabled)) {
      check();
      game.startBtn.disabled = false;
    }
  });
});

// 確認
// const game = [
//   [
//     {
//       num: 9,
//       numViewer: document.getElementById("nowTime4"),
//     },
//     {
//       num: 0,
//       numViewer: document.getElementById("nowTime"),
//     },
//     {
//       num: 1,
//       numViewer: document.getElementById("nowTime7"),
//     },
//     {
//       timerId: null,
//       stopBtn: document.getElementById("setTime1"),
//       stopFlag: false,
//     },
//   ],
//   [
//     {
//       num: 9,
//       numViewer: document.getElementById("nowTime5"),
//     },
//     {
//       num: 0,
//       numViewer: document.getElementById("nowTime2"),
//     },
//     {
//       num: 1,
//       numViewer: document.getElementById("nowTime8"),
//     },
//     {
//       timerId: null,
//       stopBtn: document.getElementById("setTime2"),
//       stopFlag: false,
//     },
//   ],
//   [
//     {
//       num: 9,
//       numViewer: document.getElementById("nowTime6"),
//     },
//     {
//       num: 0,
//       numViewer: document.getElementById("nowTime3"),
//     },
//     {
//       num: 1,
//       numViewer: document.getElementById("nowTime9"),
//     },
//     {
//       timerId: null,
//       stopBtn: document.getElementById("setTime3"),
//       stopFlag: false,
//     },
//   ],
// ];
// console.log(game);

// const start = document.getElementById("startTimer");

// game.forEach((column) => {
//   for (let i = 0; i < 3; i++) {
//     column[i].numViewer.textContent = column[i].num;
//   }
// });

// const check = function () {
//   if (game[0][1].num === game[1][1].num && game[0][1].num === game[2][1].num) {
//     alert("おめでとう！");
//   } else {
//     alert("残念！");
//   }
// };

// const countLeftMove = function () {
//   console.log("move");
//   for (let i = 0; i < 3; i++) {
//     // console.log(i);
//     game[0][i].num += 1;
//     if (game[0][i].num > 9) {
//       game[0][i].num = 0;
//     }
//     game[0][i].numViewer.textContent = game[0][i].num;
//   }
// };
// const countCenterMove = function () {
//   console.log("move");
//   for (let i = 0; i < 3; i++) {
//     // console.log(i);
//     game[1][i].num += 1;
//     if (game[1][i].num > 9) {
//       game[1][i].num = 0;
//     }
//     game[1][i].numViewer.textContent = game[1][i].num;
//   }
// };
// const countRightMove = function () {
//   console.log("move");
//   for (let i = 0; i < 3; i++) {
//     // console.log(i);
//     game[2][i].num += 1;
//     if (game[2][i].num > 9) {
//       game[2][i].num = 0;
//     }
//     game[2][i].numViewer.textContent = game[2][i].num;
//   }
// };
// const countMove = function (column) {
//   console.log("move");
//   for (let i = 0; i < 3; i++) {
//     // console.log(i);
//     column[i].num += 1;
//     if (column[i].num > 9) {
//       column[i].num = 0;
//     }
//     column[i].numViewer.textContent = column[i].num;
//   }
// };

// start.addEventListener("click", function () {
//   game.forEach((column) => {
//     start.disabled = true;
//     column[3].stopBtn.disabled = false;
//     column[3].timerId = setInterval(function () {
//       countMove(column);
//     }, 1000);
//   });
//   // setInterval(function(){countMove(0)}, 1000);
//   // setInterval(function(){countMove(1)}, 1000);
//   // setInterval(function(){countMove(2)}, 1000);
// });

// game.forEach((column) => {
//   column[3].stopBtn.addEventListener("click", function () {
//     clearInterval(column[3].timerId);
//     column[3].stopBtn.disabled = true;
//     column[3].stopFlag = true;
//   });
// });
