const isOdd = function(number) {
  return (number & 1) === 1;
}

const isNegative = function(number) {
  return number !== Math.abs(number);
}

const isGreaterThan100 = function(number) {
  return number >= 100 
}

const isStringLenMoreThan3 = function(string) {
  return string.length > 3;
}

const isAllCharMoreThan3 = function(arrayOfString) {
  for (const string of arrayOfString) {
    if (!isStringLenMoreThan3(string)) {
      return false;
    }
  }

  return true;
}

const isOddPresent = function(array) {
  for (const i of array) {
    if (isOdd(i)) {
      return true;
    }
  }

  return false;
}

const isAtLeastGreaterThan100 = function(array) {
  for (const num of array) {
    if (isGreaterThan100(num)) {
      return true;
    }
  }

  return false;
}

const isAllPositive = function(array) {
  for (const num of array) {
    if (isNegative(num)) {
      return false;
    }
  }

  return true;
}

const isFound = function(arrayOfList, predicate) {
  for (const element of arrayOfList) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
}

const isConditionSatisfy = function(arrayOfList, predicate) {
  for (const element of arrayOfList) {
    if (predicate(element)) {
      return false;
    }
  }

  return true;
}


console.log(isOddPresent([1, 2, 3, 5]));
console.log(isOddPresent([12, 4]));
console.log(isOddPresent([0, 1]));
