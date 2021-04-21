import fs from 'fs';
import path from 'path';
import { isPalindromePossible } from './05_anagram-palindrome.js';

describe('anagram-palindrome', () => {
  it('should return true for possible to make palindrome', () => {
    expect(isPalindromePossible('aaabbbb')).toBe(true);
    expect(isPalindromePossible('cdcdcdcdeeeef')).toBe(true);

    const bigContent = fs.readFileSync(path.resolve(__dirname, '../test-data/anagram-palindrome-success1.txt'),'ascii');
    expect(isPalindromePossible(bigContent)).toBe(true);
  });

  it('should return false for if not possible to make palindrome', () => {
    expect(isPalindromePossible('cdefghmnopqrstuvw')).toBe(false);

    const bigContent = fs.readFileSync(path.resolve(__dirname, '../test-data/anagram-palindrome-fail1.txt'),'ascii');
    expect(isPalindromePossible(bigContent)).toBe(false);
  });
});
