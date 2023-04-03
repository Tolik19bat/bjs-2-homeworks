function getArrayParams(...arr) {
  if (arr == []) {
    return { min: 0, max: 0, avg: 0 };
  }
  let minElement = arr[0];
  minElement = Math.min(...arr);
  
  let maxElement = arr[0];
  maxElement = Math.max(...arr);
  
  let sumElements = arr.reduce(function(sumOfNumbers, element) {
    return sumOfNumbers + element;
  }, 0);
  let quantityElement = arr.length;
  let avg = sumElements / quantityElement;
  avg = +avg.toFixed(2);
  return  { min: minElement, max: maxElement, avg: avg };
}

function summElementsWorker(...arr) {
  let resultSumElements = 0;
  if (arr == []) {
  return resultSumElements;
  }
   resultSumElements = arr.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  return resultSumElements;
  
}

function differenceMaxMinWorker(...arr) {
  if (arr == []) {
    return elementDifference = 0;
  }
  let minElement = arr[0];
  for (const item of arr) {
    if (item < minElement) {
      minElement = item;
    }
  }
  let maxElement = arr[0];
  for (const item of arr) {
    if (item > maxElement) {
      maxElement = item;
    }
  }
  let elementDifference = maxElement - minElement;
  
  return elementDifference;
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
