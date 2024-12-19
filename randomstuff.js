const num = [1, 2, 3, 4];

const letsS  = num.flatMap((element) => [element, element + element]);

const char = ["try", "toe", "use", "flatMap"];

const corresponding = char.filter((element) => !element.endsWith("e")).flatMap((ele, index, array) => { if (array.length === 0) return [];
  return [`${ele} - $ {array[index + 1]}`];
});

console.log("corresponding", corresponding);