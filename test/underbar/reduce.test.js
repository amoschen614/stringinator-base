const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const arr = [1, 2, 3];
    expect(_.reduce(arr, (a, el) => a + el, 4)).toBe(10);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const arr = [1, 2, 3];
    expect(_.reduce(arr, (a, el) => a + el)).toBe(6);
  });

});