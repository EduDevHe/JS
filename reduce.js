/**
 * O método reduce é utilizado para reduzir um array em um único valor
 */

const numbers = [2, 3, 4, 5, 6, 7, 8];

const sum = numbers.reduce((accumulator, current) => {
  return accumulator * current;
}, 2);

console.log(sum); // 35;

/**
 * Implementação do método reduce
 */

function reduce(arr, callback, initialValue = arr[0]) {
  let accumulator = initialValue;
  for (let i = initialValue === arr[0] ? 0 : 1; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

const sum2 = reduce(
  numbers,
  (accumulator, current) => {
    return accumulator * current;
  },
  2
);

console.log(sum2);

Array.prototype;
