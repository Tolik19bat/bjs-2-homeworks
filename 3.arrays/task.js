function compareArrays(arr1, arr2) {
  let comparisonResult;
  if (arr1.length === arr2.length) {
    comparisonResult = arr1.every((n, i) => n === arr2[i]);
  } else {
    return (comparisonResult = false);
  }
  return comparisonResult;
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return (result = 0);
  }
  if (gender === "мужской" || gender === "женский") {
    const sortingByGender = users.filter((obj) => obj.gender === gender);
    const agesQuantity = sortingByGender.map((obj) => obj.age);
    const arrayWithAges = agesQuantity.reduce(
      (total, element) => total + element,
      0
    );
    const elementsQuantity = agesQuantity.length;
    const result = arrayWithAges / elementsQuantity;
    return result;
  } else {
    return (result = 0);
  }
}
