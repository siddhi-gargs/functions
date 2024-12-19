const array = [10, 20];
const add = function(array, initial) {
  const init = initial;
  for (const i of array) {
    init[0][0] = init[0][0] + array[i];
    init[0][1] = init[0][1] + array[i];
  }

  return init;
}

const b = array.reduce(add);

console.log("b", b);
