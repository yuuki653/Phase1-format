// const countdown = document.createElement("p");
// document.body.prepend(countdown);

// function countDown() {
//   const diff = moment("2112-09-03 12:00:00").diff(moment());
//   const duration = moment.duration(diff);

//   const sec = duration.seconds();
//   // console.log(sec);
//   const min = duration.minutes();
//   // console.log(min);
//   const hour = duration.hours();
//   // console.log(hour);
//   const days = Math.floor(duration.asDays());
//   // console.log(days);

//   countdown.textContent = `ドラえもんが生まれるまであと${days}日${hour}時間${min}分${sec}秒`;
//   console.log(`あと${days}日${hour}時間${min}分${sec}秒`);
// }

// setInterval(countDown, 1000);

// チャレンジ問題

const dateSet = document.getElementById("dateSet");
const dateSearch = document.getElementById("dateSearch");
const diffTime = document.getElementById("diffTime");

dateSearch.addEventListener("click", function () {
  const countDown = function () {
    const diff = moment(dateSet.value).diff(moment());
    const duration = moment.duration(diff);

    const sec = duration.seconds();
    const min = duration.minutes();
    const hour = duration.hours();
    const days = Math.floor(duration.asDays());
    // const sec = moment(dateSet.value).diff(moment(), "seconds") % 60;
    // const min = moment(dateSet.value).diff(moment(), "minutes") % 60;
    // const hour = moment(dateSet.value).diff(moment(), "hours") % 24;
    // const days = moment(dateSet.value).diff(moment(), "days");

    diffTime.textContent = `${dateSet.value}まであと${days}日${hour}時間${min}分${sec}秒`;
  };

  setInterval(countDown, 1000);
});
