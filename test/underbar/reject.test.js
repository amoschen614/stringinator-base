const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const evens = _.reject(arr, el => el % 2 !== 0);
    expect(evens).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const arr = [1, null, 2, null, 3];
    const nums = _.reject(arr, el => el === null);
    expect(nums).toEqual([1, 2, 3]);
  });
});