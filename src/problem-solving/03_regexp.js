/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */

const containsNumber = (str) => {
  // could be just /\d+/g but it will not work for '1a2b3c' to get all numbers from string but still work for 'ab123c'
  const result = `${str}`.match(/(?<=[\w\s]*)\d+/gi);
  return !!result;
}

const containsRepeatingLetter = (str) => {
  const result = `${str}`.match(/([a-z])\1/gi);
  return !!result;
}

const endsWithVowel = (str) => {
  const result = `${str}`.match(/([aeiou])$/gi);
  return !!result;
}

const captureThreeNumbers = (str) => {
  const result = `${str}`.match(/([0-9]){3}/gi);
  return result ? result[0] : false;
}

const matchesPattern = (str) => {
  const result = `${str}`.match(/^([0-9]{3}-[0-9]{3}-[0-9]{4})$/gi);
  return !!result;
}

const isUSD = (str) => {
  const result = `${str}`.match(/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/);
  return !!result;
}

export default {
  containsNumber,
  containsRepeatingLetter,
  endsWithVowel,
  captureThreeNumbers,
  matchesPattern,
  isUSD,
}
