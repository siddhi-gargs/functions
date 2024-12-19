const range = function (from, to, step) {
  const result = []
  for (let iterator = from; iterator !== to; iterator += step) {
    result.push(iterator);
  }
  result.shift();
  return result;
}