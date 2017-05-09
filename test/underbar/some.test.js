const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const arr = [2, 3, 4];
    expect(_.some(arr, el => el % 2 !== 0)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const arr = [2, 4];
    expect(_.some(arr, el => el % 2 !== 0)).toBe(false);
  });

});