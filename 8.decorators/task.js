//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = ???; // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.find((item) => ???); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
            console.log("Из кэша: " + ???); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + ???;
        }
  
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push(???) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          ??? // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
  
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
