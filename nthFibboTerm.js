const generateArray = function(length, value) {
  return Array(length).fill(value);
}

const findNthTerm = function(init) {
  [init[0], init[1]] = [init[1], init[0] + init[1]];
  return init;
}

const findFibboTerm = function(nthTerm) {
  const arrayOfTerm = generateArray(nthTerm - 1, nthTerm);
  const updatedInit = arrayOfTerm.reduce(findNthTerm, [0, 1]);
  return updatedInit[0];
}

const testNthTerm = function(failed, expected, ...inputs) {
  const actual = findFibboTerm(inputs);
  if (actual !== expected) {
    failed.push(expected, actual);
  }
}

const testCase = function() {
  const failed = [];
  testNthTerm(failed, 5, 6);
  testNthTerm(failed, 0, 1);
  testNthTerm(failed, 1, 2);
  testNthTerm(failed, 1, 3);
  testNthTerm(failed, 2, 4);
  testNthTerm(failed, 3, 5);
  console.table(failed);
}

testCase();


// console.log(findFibboTerm(4));

// const arr = [4, 5, 67, 45, 89, 34];
// const target = 2;

// const rotate = function(arr, target) {
//   for (let i = 0; i < target; i++) {
//     const ele = arr[arr.length - 1];
//     arr.pop();
//     arr.unshift(ele);
//   }
  
//   return arr;
// }