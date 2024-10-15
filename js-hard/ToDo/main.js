const task = document.getElementById("add-area");
const addBtn = document.getElementsByClassName("add-btn")[0];
const todo = document.getElementById("todo");

addBtn.addEventListener("click", function () {
  if (task.value === "") {
    alert("空欄です");
  } else {
    let newTask = document.createElement("li");
    let finishBtn = document.createElement("button");
    newTask.textContent = task.value;
    finishBtn.textContent = "完了";
    todo.appendChild(newTask);
    newTask.appendChild(finishBtn);
    task.value = "";

    finishBtn.addEventListener("click", function () {
      todo.removeChild(finishBtn.parentElement);
    });
  }
});

// const task = document.getElementById("add-area");
// const addBtn = document.querySelector(".add-btn");
// const todo = document.getElementById("todo");

// addBtn.addEventListener("click", function () {
//   if (task.value === "") {
//     alert("空欄です");
//   } else {
//     let newTask = document.createElement("li");
//     let finishBtn = document.createElement("button");
//     newTask.textContent = task.value;
//     finishBtn.textContent = "完了";
//     todo.appendChild(newTask);
//     newTask.appendChild(finishBtn);
//     task.value = "";

//     finishBtn.addEventListener("click", function () {
//       todo.removeChild(finishBtn.parentElement);
//     });
//   }
// });

// const task = document.getElementById("add-area");
// const addBtn = document.getElementsByClassName("add-btn")[0];
// const todo = document.getElementById("todo");

// addBtn.addEventListener("click", function () {
//   if (task.value === "") {
//     alert("空欄です");
//   }
//   if (task.value) {
//     let newTask = document.createElement("li");
//     let finishBtn = document.createElement("button");
//     newTask.textContent = task.value;
//     finishBtn.textContent = "完了";
//     todo.appendChild(newTask);
//     newTask.appendChild(finishBtn);
//     task.value = "";

//     finishBtn.addEventListener("click", function () {
//       todo.removeChild(finishBtn.parentElement);
//     });
//   }
// });
