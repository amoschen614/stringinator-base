const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = [1, 2, 3];
    expect(_.contains(arr, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = [1, 3];
    expect(_.contains(arr, 2)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      one: 1,
      two: 2,
    };
    expect(_.contains(obj, 2)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      one: 1,
      two: 2,
    };
    expect(_.contains(obj, 3)).toBe(false);
  });

});