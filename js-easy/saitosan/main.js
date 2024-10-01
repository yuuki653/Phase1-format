// const setBtn = function () {
//   if (Math.random() * 10 < 5) {
//     alert("ぺっぺっぺー");
//   } else {
//     alert("斎藤さんだぞ！");
//   }
// };

// const setBtn = function () {
//   const i = Math.random() * 10;
//   if (i < 5) {
//     alert("ぺっぺっぺー");
//   } else {
//     alert("斎藤さんだぞ！");
//   }
// };

const setBtn = function () {
  const i = Math.random() * 10;
  if (i < 5) {
    const result = window.confirm("ぺっぺっぺー");
    if (result) {
      alert("ぺっぺっぺー");
    } else {
      alert("斎藤さんだぞ！");
    }
  } else {
    const result = window.confirm("斎藤さんだぞ！");
    if (result) {
      alert("斎藤さんだぞ！");
    } else {
      alert("ぺっぺっぺー");
    }
  }
};
