var arr = [];

function generatAndSumm(num) {
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  console.log(arr);
}

function summOfArray(arr) {
  var sum = arr.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}

generatAndSumm(10);

summOfArray(arr);
