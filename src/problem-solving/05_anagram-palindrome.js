/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */

const isPalindromePossible = str => {
  // [a...z] - charCode('a') === 97 -> to set bitmap from zero
  const shift = 97;
  const bitmap = Array.from({ length: 26 }, _ => 0);
  let index = 0;
  while (true) {
    if (index > str.length - 1) break;
    const charCode = str.charCodeAt(index);
    bitmap[charCode - shift] += 1;
    index++;
  }
  return bitmap.filter(c => Math.floor(c % 2) === 1).length < 2;
}

export {
  isPalindromePossible,
}
