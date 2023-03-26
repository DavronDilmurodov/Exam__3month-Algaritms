function summOfArray(arr) {
  var sum = arr.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}

summOfArray([1, 2, 3, 4, 5]);
