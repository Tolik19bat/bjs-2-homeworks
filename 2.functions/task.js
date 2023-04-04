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
  if (arr.length === 0) {
    return 0;
  }
  let resultSumElements = arr.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  return resultSumElements;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let minElement = 0;
  minElement = Math.min(...arr);
  let maxElement = 0;
  maxElement = Math.max(...arr);
  let numberDifference = maxElement - minElement;
  return numberDifference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {}

function makeWork(arrOfArr, func) {}
