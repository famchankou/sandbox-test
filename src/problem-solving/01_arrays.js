/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */

const sum = (arr) => {
  let result = 0;
  if (Array.isArray(arr) && arr?.length) {
    result = arr?.reduce((sum, val) => sum + val, 0);
  }
  return result;
}

const concat = (...arrays) => {
  return arrays.reduce((result, arr) => {
    if (Array.isArray(arr) && arr?.length) {
      result = result.concat(arr);
    }
    return result;
  }, []);
}

const count = (arr, num) => {
  let bitmap = [];
  if (Array.isArray(arr) && arr?.length) {
    arr.sort((a, b) => a - b);
    bitmap = Array.from({ length: arr[arr.length - 1] }, _ => 0);
    arr.forEach(val => bitmap[val - 1] += 1);
  }
  const occurrencies = Number.isInteger(num) && bitmap[num - 1];
  return occurrencies ? occurrencies : 0;
}

const duplicates = (arr) => {
  let duplicates = [];
  if (Array.isArray(arr) && arr?.length) {
    duplicates = duplicates.concat(arr.filter(val => arr.indexOf(val) !== arr.lastIndexOf(val)));
  }
  return [... new Set(duplicates)].sort();
}

const square = (arr) => {
  let result = [];
  if (Array.isArray(arr) && arr?.length) {
    result = arr.map(v => v**2);
  }
  return result;
}

export {
  sum,
  concat,
  count,
  duplicates,
  square,
}