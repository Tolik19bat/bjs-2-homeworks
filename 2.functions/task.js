function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }
  let min = arr[0];
  min = Math.min(...arr);

  let max = arr[0];
  max = Math.max(...arr);

  let sumElements = arr.reduce(function (sumOfNumbers, element) {
    return sumOfNumbers + element;
  }, 0);
  let quantityElement = arr.length;
  let avg = sumElements / quantityElement;
  avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let resultSumElements = 0;
  if (arr == []) {
    return resultSumElements;
  }
  resultSumElements = arr.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  return resultSumElements;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let numberDifference = 0;
  let minElement = 0;
  minElement = Math.min(...arr);
  let maxElement = 0;
  maxElement = Math.max(...arr);
  numberDifference = maxElement - minElement;
  return numberDifference;
}
function differenceEvenOddWorker(...arr) {}

function averageEvenElementsWorker(...arr) {}

function makeWork(arrOfArr, func) {}
