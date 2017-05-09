const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const arr = [1, 2, 2, 1, 3];
    expect(_.uniq(arr)).toEqual([1, 2, 3]);
  });
});