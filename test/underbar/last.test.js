const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const arr = [1, 2, 3];
    expect(_.last(arr)).toBe(3);
  });

  it('returns the last 2 elements of an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(_.last(arr, 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = [1, 2, 3];
    expect(_.last(arr, 4)).toEqual(arr);
  });
});