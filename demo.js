// 1.示範非同步
function readJsonFile(dataPath, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", dataPath, true);
    xhr.onload = function() {
      if(xhr.status === 200) {
          callback(null, xhr.responseText);
      } else {
          callback('出現錯誤')
      } 
    };
    xhr.send();
  }

readJsonFile("./json/data1.json", (err, res)=> {
    console.log(res) // 資料：1
});
readJsonFile("./json/data2.json", (err, res)=> {
    console.log(res) // 資料：2
});
readJsonFile("./json/data3.json", (err, res)=> {
    console.log(res) // 資料：3
});
readJsonFile("./json/data4.json", (err, res)=> {
    console.log(res) // 資料：4
});
readJsonFile("./json/data5.json", (err, res)=> {
    console.log(res) // 資料：5 
});

// 改為同步-巢狀

// function readJsonFile(dataPath, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", dataPath, true);
//   xhr.onload = function() {
//     if(xhr.status === 200) {
//         callback(null, xhr.responseText);
//     } else {
//         callback('出現錯誤')
//     } 
//   };
//   xhr.send();
// }

// // 使用這些函數 - 這就是 "callback hell"
// readJsonFile("./json/data1.json", function (error, data1) {
//   readJsonFile("./json/data2.json", function (error, data2) {
//     readJsonFile("./json/data3.json", function (error, data3) {
//       readJsonFile("./json/data4.json", function (error, data4) {
//         readJsonFile("./json/data5.json", function (error, data5) {
//           readJsonFile("./json/data6.json", function (error, data6) {
//             console.log(data1);
//             console.log(data2);
//             console.log(data3);
//             console.log(data4);
//             console.log(data5);
//             console.log(data6);
//           });
//         });
//       });
//     });
//   });
// });

// 2.更優雅的寫法 promise
// 1) 宣告 promise
// function readJsonPromise(dataPath) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", dataPath, true);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(xhr.responseText);
//       } else {
//         reject("出現錯誤");
//       }
//     };
//     xhr.send();
//   });
// }

// 2) 使用優雅的 promise
// readJsonPromise('./json/data1.json')
// .then(res=> {
//     console.log(res)
//     return readJsonPromise('./json/data2.json')
// }).then(res=> {
//     console.log(res)
//     return readJsonPromise('./json/data3.json')
// }).then(res=> {
//     console.log(res)
//     return readJsonPromise('./json/data4.json')
// }).then(res=> {
//     console.log(res)
// }).catch(err=> {
//     console.log(err)
// })

// 3) 更優雅的 async/await
// const readAsync = async () => {
//   try {
//     const data1 = await readJsonPromise("./json/data1.json");
//     const data2 = await readJsonPromise("./json/data2.json");
//     const data3 = await readJsonPromise("./json/data3.json");
//     console.log(data1);
//     console.log(data2);
//     console.log(data3);
//   } catch (err) {
//     console.log("error:", err)
//   }
// };

// readAsync();
