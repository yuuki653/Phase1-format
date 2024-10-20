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

let slot = [
  (left = [
    {
      num: 9,
      timerId: null,
      numViewer: document.getElementById("nowTime4"),
    },
    {
      num: 0,
      timerId: null,
      stopBtn: document.getElementById("setTime1"),
      numViewer: document.getElementById("nowTime"),
      stopFlag: false,
    },
    {
      num: 1,
      timerId: null,
      numViewer: document.getElementById("nowTime7"),
    },
  ]),
  (center = [
    {
      num: 9,
      timerId: null,
      numViewer: document.getElementById("nowTime5"),
    },
    {
      num: 0,
      timerId: null,
      stopBtn: document.getElementById("setTime2"),
      numViewer: document.getElementById("nowTime2"),
      stopFlag: false,
    },
    {
      num: 1,
      timerId: null,
      numViewer: document.getElementById("nowTime8"),
    },
  ]),
  (right = [
    {
      num: 9,
      timerId: null,
      numViewer: document.getElementById("nowTime6"),
    },
    {
      num: 0,
      timerId: null,
      stopBtn: document.getElementById("setTime3"),
      numViewer: document.getElementById("nowTime3"),
      stopFlag: false,
    },
    {
      num: 1,
      timerId: null,
      numViewer: document.getElementById("nowTime9"),
    },
  ]),
];

const start = document.getElementById("startTimer");

for (let i = 0; i < slot.length; i++) {
  slot[i].forEach((column) => {
    column.numViewer.textContent = column.num;
  });
}

const check = function (column) {
  if (slot.every((column) => left[1].num === column[1].num)) {
    alert("おめでとう！");
  } else {
    alert("残念！");
  }
};

const countMove = function (column) {
  for (let i = 0; i < slot.length; i++) {
    column[i].num += 1;
    if (column[i].num > 9) {
      column[i].num = 0;
    }
    column[i].numViewer.textContent = column[i].num;
  }
};

start.addEventListener("click", function () {
  slot.forEach((column) => {
    start.disabled = true;
    slot.forEach((column) => {
      column[1].stopBtn.disabled = false;
    });
    for (let i = 0; i < slot.length; i++) {
      column[i].timerId = setInterval(function () {
        countMove(column);
      }, 100);
    }
  });
});

slot.forEach((column) => {
  column[1].stopBtn.addEventListener("click", function () {
    for (let i = 0; i < slot.length; i++) {
      clearInterval(column[i].timerId);
    }
    column[1].stopBtn.disabled = true;
    column[1].stopFlag = true;

    if (slot.every((column) => column[1].stopFlag)) {
      check();
      start.disabled = false;
      slot.forEach((column) => {
        column[1].stopFlag = false;
      });
    }
  });
});
