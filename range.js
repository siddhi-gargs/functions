// [1, 2, 3, 4, 5];
const isStepsNegative = function(number) {
  return number !== Math.abs(number);
}

const decideComaprisonOperator = function(steps, i , to) {
  if (isStepsNegative(steps)) {
    return i > 10
  }
  return i < to;
}

const series = function(from, to, steps) {
  const rangeArray = [];
  for (let i = from; decideComaprisonOperator(steps, i, to) ; i = i + steps) {
    rangeArray.push(i);
  }

  return rangeArray;
}