function compareArrays(arr1, arr2) {
    let comparisonResult;
    if (arr1.length === arr2.length) {
    comparisonResult = arr1.every((n, i) => n === arr2[i]);
    } else {
        return comparisonResult = false;
    }
  return comparisonResult;



//   const compareArrays = (a, b) => a.length === b.length && a.every((n, i) => n === b[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  
}