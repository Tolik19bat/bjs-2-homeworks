// Функция находит минимальное, максимальное значение и среднее арифметическое элементов массива
function getArrayParams(...arr) {
  // Если массив пустой, возвращаем нули
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  // Находим минимальный элемент массива
  let min = Math.min(...arr);

  // Находим максимальный элемент массива
  let max = Math.max(...arr);

  // Вычисляем сумму всех элементов массива с помощью reduce
  let sumElements = arr.reduce(function (sumOfNumbers, element) {
    return sumOfNumbers + element;
  }, 0);

  // Получаем количество элементов
  let quantityElement = arr.length;

  // Вычисляем среднее арифметическое
  let avg = sumElements / quantityElement;

  // Округляем среднее до двух знаков после запятой
  avg = +avg.toFixed(2);

  // Возвращаем объект с результатами
  return { min: min, max: max, avg: avg };
}

// Функция возвращает сумму всех элементов массива
function summElementsWorker(...arr) {
  // Если массив пустой, возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  // Инициализируем переменную для суммы
  let resultSumElements = 0;

  // Вычисляем сумму элементов массива с помощью reduce
  arr.reduce(function (sum, elem) {
    return (resultSumElements = sum + elem);
  }, 0);

  // Возвращаем сумму
  return resultSumElements;
}

// Функция возвращает разницу между максимальным и минимальным элементами массива
function differenceMaxMinWorker(...arr) {
  // Если массив пустой, возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  // Находим минимальный элемент массива
  let minElement = Math.min(...arr);

  // Находим максимальный элемент массива
  let maxElement = Math.max(...arr);

  // Вычисляем разницу между максимальным и минимальным значением
  let numberDifference = maxElement - minElement;

  // Возвращаем разницу
  return numberDifference;
}

// Функция возвращает разницу между суммой чётных и нечётных элементов массива
function differenceEvenOddWorker(...arr) {
  // Если массив пустой, возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  // Инициализируем сумму чётных и нечётных элементов
  let sumEvenElement = 0;
  let sumOddElement = 0;

  // Перебираем элементы массива
  for (let i = 0; i < arr.length; i++) {
    // Если элемент чётный, прибавляем к сумме чётных
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      // Иначе — к сумме нечётных
      sumOddElement += arr[i];
    }
  }

  // Вычисляем разницу между суммами
  let differenceElements = sumEvenElement - sumOddElement;

  // Возвращаем разницу
  return differenceElements;
}

// Функция возвращает среднее значение только чётных элементов массива
function averageEvenElementsWorker(...arr) {
  // Если массив пустой, возвращаем 0
  if (arr.length === 0) {
    return 0;
  }

  // Инициализируем сумму чётных элементов и их количество
  let sumEvenElement = 0;
  let countEvenElement = 0;

  // Перебираем элементы массива
  for (let i = 0; i < arr.length; i++) {
    // Если элемент чётный, прибавляем к сумме и увеличиваем счётчик
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  // Вычисляем среднее значение чётных элементов
  let averageEvenElements = sumEvenElement / countEvenElement;

  // Возвращаем среднее
  return averageEvenElements;
}

// Функция принимает массив массивов и функцию-обработчик,
// возвращает наибольший результат обработки каждого массива
function makeWork(arrOfArr, func) {
  // Если массив массивов пустой, возвращаем 0
  if (arrOfArr.length === 0) {
    return 0;
  }

  // Устанавливаем начальное значение самого большого результата
  let maxWorkerResult = -Infinity;

  // Перебираем каждый подмассив
  for (let i = 0; i < arrOfArr.length; i++) {
    // Применяем функцию к текущему подмассиву
    const result = func(...arrOfArr[i]);

    // Если результат больше текущего максимума, обновляем его
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  // Возвращаем наибольший результат
  return maxWorkerResult;
}
