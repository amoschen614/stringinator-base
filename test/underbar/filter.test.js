const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    const odds = _.filter(arr, el => el % 2 !== 0);
    expect(odds).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const arr = [1, 'a', 2, 'b', 3];
    const nums = _.filter(arr, el => typeof el === 'number');
    expect(nums).toEqual([1, 2, 3]);
  });
});