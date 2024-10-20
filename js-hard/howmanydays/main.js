const countdown = document.createElement("p");
document.body.prepend(countdown);

function countDown() {
  const diff = moment("2112-09-03 12:00:00").diff(moment());

  const sec = Math.floor(diff / 1000) % 60;
  const min = Math.floor(diff / 1000 / 60) % 60;
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  countdown.textContent = `ドラえもんが生まれるまであと${days}日${hour}時間${min}分${sec}秒`;
  //   console.log(`あと${days}日${hour}時間${min}分${sec}秒`);
}

setInterval(countDown, 1000);

// チャレンジ問題

// const dateSet = document.getElementById("dateSet");
// const dateSearch = document.getElementById("dateSearch");
// const diffTime = document.getElementById("diffTime");

// dateSearch.addEventListener("click", function () {
//   const countDown = function () {
//     const diff = moment(dateSet.value).diff(moment());

//     const sec = Math.floor(diff / 1000) % 60;
//     const min = Math.floor(diff / 1000 / 60) % 60;
//     const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);

//     diffTime.textContent = `${dateSet.value}まであと${days}日${hour}時間${min}分${sec}秒`;
//   };

//   setInterval(countDown, 1000);
// });
