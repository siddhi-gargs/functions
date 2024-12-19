// const minimum = function(first, second) {
//   return first > second ? second : first;
// }

const array1 = [1, 2, 3, 4, 5, 6];
// array1.reduce(minimum, 58);

const reverse = function(init, element) {
  init.unshift(element);
  return init;
}
const reve = array1.reduce(reverse , []);

const char = function(init, element) {
  init = element + init;
  return init;
}

const stringReverse = function(init, element, index) {
  const splitArray = element.split("");
  console.log(splitArray);
  init[index] = splitArray.reduce(char, "");

  return init;
}

const stringArray = ["does", "it", "will", "work" ,"kya"];

console.log(stringArray.reduce(stringReverse, []));