/**
 * Export a function named 'count'.
 * It should call the given callback every 10th of a second with a increment from given start to end integer
 * Return a function to prematurely cancel the counting process.
 *
 * @param {number} start - Given to callback first
 * @param {number} end - Stop when count reached this value
 * @param {function(number): void} callback - Called after each 100ms with an increment
 * @returns {function(): void} - Cancel countdown function
 */


const count = (startCount, endCount, callback) => {
  let count = startCount;
  let stop = false;
  let start = Date.now();
  let interval = setInterval(() => {
    let newDate = Date.now();
    let delta = newDate - start;
    if (delta > 100) {
      start = newDate;
      callback(count++);
    }
    if (endCount === count - 1 || stop) {
      clearInterval(interval);
    }
  }, 1);

  return () => stop = true;
}

export {
  count,
}
