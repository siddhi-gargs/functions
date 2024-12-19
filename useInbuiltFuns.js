const arr = [1, 2, 3, 4, 5];

// const addSpace = function(len, char) {
//   return char.padEnd(len, " ");
// }

// const pattern = function(times) {
//   return "*".repeat(times);
// }

// const array = arr.map(pattern); 
// console.log(array.map(addSpace, array.length));

const join = function(char) {
  return char.join("\n");
}

const [abc , ...num] = [3, 4, 7, 8, 4];

const eachchar = function(...num) {

}
  const repeatUser = function(times) {
    return () => "*".repeat(times);
  }

  const array1 = [1, 2, 3, 4, 5];
  const rectangleArray = array.map(repeatUser(array.length));

  console.log(rectangleArray.join("\n"));


const array = [13, 5, 6];
const init = [8, 50, 66];

const addCorrespond = function(initArray, element, index) {
  initArray[index] += element;
  return [...initArray];
}

const sumArray = array.reduce(addCorrespond, init);
// const store = arrayOfChar.map(function (element) {
//   return element.length;
// })

// console.log(store);