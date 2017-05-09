const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const roots = [1, 2, 3, 4, 5];
    const squares = _.map(roots, el => el * el);
    expect(squares).toEqual([1, 4, 9, 16, 25]);
  });
});