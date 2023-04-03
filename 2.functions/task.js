function getArrayParams(...arr) {
  let min = arr[0];
  min = Math.min(...arr);
  
  let max = arr[0];
  max = Math.max(...arr);
  
  let sum = arr.reduce(function(sumOfNumbers, element) {
    return sumOfNumbers + element;
  }, 0);
  let quantityElement = arr.length;
  let avg = sum / quantityElement;
  avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
