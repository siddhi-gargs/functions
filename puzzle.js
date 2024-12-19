const methods = function(arrayOfNumbers, squarRoot) {
  const elements = [];
  for (const number of arrayOfNumbers) {
    elements.push(squarRoot(number));
  }

  return elements;
}

const isOdd = function(num) {
  return (num & 1) === 1;
}

const isCharLength5 = function(char) {
  return char.length >= 5;
}

const upperCaseChar = function(char) {
  return char.toUpperCase();
}

const divide = function(num) {
  return (num / 2);
}

const filterElements = function(array, isOdd){
  const filteredArray = [];
  for (const i of array) {
    if (isOdd(i)) {
      filteredArray.push(i);
    }
  }

  return filteredArray;
}

console.log(filterElements(["your", "welcome"], isCharLength5));

const equalNoOfOutput = function(input, a) {
  switch (a) {
    case "squareRoot": return methods(input, Math.sqrt);
    case "half": return methods(input, divide);
    case "uppperCase": return methods(input, upperCaseChar);
  }
}

const testCase = function(logic, input, expected, failed) {
  const generatedOutput = equalNoOfOutput(input, logic);
  if (generatedOutput !== expected) {
    failed.push(logic, input);
  }
}

const squareRoot = function(failed) {
  testCase("squareRoot", [4], [2], failed);
  testCase("squareRoot", [1, 4, 9], [1, 2, 3], failed);
  testCase("squareRoot", [1, 4, 9, 16], [1, 2, 3, 4], failed);
  testCase("squareRoot", [1, 4, 9, 16, 25], [1, 2, 3, 4, 5], failed);
}

const halfTheNumber = function(failed) {
  testCase()
}

function allTestCaseEqualOutput(){
  const failed = [];
  squareRoot(failed);
  
  console.table(failed);
}

allTestCaseEqualOutput();

const greaterString = function(string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

const joinWord = function(word1, word2) {
  return word1.concat(word2);
}

const multiplyOperand = function(number1, number2) {
  return number1 * number2;
}

const ifOddIncrease1 = function(increment, number) {
  return isOdd(number) ? increment + 1 : increment;  
}

const longestString = function(arrayOfString, funLogic, extraArgument) {
  let string = extraArgument;
  for (const currentString of arrayOfString) {
    string = funLogic(string, currentString);
  }

  return string;
}


console.log(longestString([2, 3, 4], multiplyOperand, 0));
console.log(longestString([10, 1, 2], multiplyOperand, 0));
console.log(longestString(["give", "longest", "confused"], greaterString, ""));
console.log(longestString(["give", "longest", "is ", "is"], greaterString, ""));
console.log(longestString(["give", " longest", "is ", "is"], joinWord, ""));
console.log(longestString(["not", "need ", "write ", "another"], joinWord, ""));

console.log(longestString([1, 2, 4, 6, 7, 8], ifOddIncrease1, 0));
console.log(longestString([12, 11, 4, 6, 7, 19], ifOddIncrease1, 0));

      