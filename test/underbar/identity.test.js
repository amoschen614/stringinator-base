const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(3)).toBe(3);
  });

  it('returns the same array if given an array', () => {
    const arr = [3, 'a', true];
    expect(_.identity(arr)).toBe(arr);
  });

  it('returns the same object if given an object', () => {
    const obj = {
      name: 'Mackaby',
      age: 99
    };
    expect(_.identity(obj)).toBe(obj);
  });
});