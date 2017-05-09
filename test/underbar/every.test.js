const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const arr = [1, 2, 3];
      expect(_.every(arr)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [1, 3, 5];
      const areOdd = _.every(arr, el => el % 2 !== 0);
      expect(areOdd).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [1, 2, 3];
      const areOdd = _.every(arr, el => el % 2 !== 0);
      expect(areOdd).toBe(false); 
    });

  });
});