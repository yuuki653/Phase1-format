// let slot = [
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

let game = [
  [
    {
      num: 9,
      numViewer: document.getElementById("nowTime4"),
    },
    {
      num: 0,
      numViewer: document.getElementById("nowTime"),
    },
    {
      num: 1,
      numViewer: document.getElementById("nowTime7"),
    },
    {
      timerId: null,
      stopBtn: document.getElementById("setTime1"),
      stopFlag: false,
    },
  ],
  [
    {
      num: 9,
      numViewer: document.getElementById("nowTime5"),
    },
    {
      num: 0,
      numViewer: document.getElementById("nowTime2"),
    },
    {
      num: 1,
      numViewer: document.getElementById("nowTime8"),
    },
    {
      timerId: null,
      stopBtn: document.getElementById("setTime2"),
      stopFlag: false,
    },
  ],
  [
    {
      num: 9,
      numViewer: document.getElementById("nowTime6"),
    },
    {
      num: 0,
      numViewer: document.getElementById("nowTime3"),
    },
    {
      num: 1,
      numViewer: document.getElementById("nowTime9"),
    },
    {
      timerId: null,
      stopBtn: document.getElementById("setTime3"),
      stopFlag: false,
    },
  ],
];
console.log(game);

const start = document.getElementById("startTimer");

game.forEach((column) => {
  for (let p = 0; p < 3; p++) {
    // console.log(p);
    // console.log(column[p]);
    column[p].numViewer.textContent = column[p].num;
  }
});

const check = function () {
  if (game[0][1].num === game[1][1].num && game[0][1].num === game[2][1].num) {
    alert("おめでとう！");
  } else {
    alert("残念！");
  }
};

const countMove = function (column) {
  console.log("move");

  for (let i = 0; i < game.length; i++) {
    console.log(i);
    column[i].num += 1;
    if (column[i].num > 9) {
      column[i].num = 0;
    }

    column[i].numViewer.textContent = column[i].num;
  }

  console.log(`U:${column[0].num}`);
  console.log(`M:${column[1].num}`);
  console.log(`D:${column[2].num}`);
};

start.addEventListener("click", function () {
  game.forEach((column, i) => {
    start.disabled = true;
    column[3].stopBtn.disabled = false;
    column[3].timerId = setInterval(function () {
      countMove(column);
    }, 1000);
  });
});

// start.addEventListener("click", function () {
//   slot.forEach((column, i) => {
//     console.log(i);
//     start.disabled = true;
//     column[1].stopBtn.disabled = false;
//     column[i].timerId = setInterval(function () {
//       console.log(i);
//       countMove(column);
//     }, 1000);
//   });
// });

game.forEach((column) => {
  column[3].stopBtn.addEventListener("click", function () {
    clearInterval(column[3].timerId);
    column[3].stopBtn.disabled = true;
    column[3].stopFlag = true;

    if (game.every((column) => column[3].stopFlag)) {
      check();
      start.disabled = false;
      game.forEach((column) => {
        column[3].stopFlag = false;
      });
    }
  });
});

// slot.forEach((column) => {
//   column[1].stopBtn.addEventListener("click", function () {
//     for (let i = 0; i < slot.length; i++) {
//       clearInterval(column[i].timerId);
//     }
//     column[1].stopBtn.disabled = true;
//     column[1].stopFlag = true;

//     if (slot.every((column) => column[1].stopFlag)) {
//       check();
//       start.disabled = false;
//       slot.forEach((column) => {
//         column[1].stopFlag = false;
//       });
//     }
//   });
// });
