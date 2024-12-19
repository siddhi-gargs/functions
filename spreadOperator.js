const numbers = [12, 13,, 4, 25, 6];

const product = function(...arg) {
  return arg.reduce((element, multiple) => element * multiple);
}

console.log(product(2, 3, 4, 5, 6, 7));

const sorting = function(...list) {
  const sort = list.sort();
  return sort
}

console.log(sorting(3, 6, 23, 4, 85, 7, 45, 34));