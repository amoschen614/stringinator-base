const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = [1, 2, 3];
    let count = 0;
    _.each(arr, el => {
      expect(el).toBe(arr[count++]);
    })
    expect(count).toBe(arr.length);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const obj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c', 
    };
    let count = 0;
    _.each(obj, prop => {
      expect(prop).toBe(obj[count++]);
    });
    expect(count).toBe(obj.length);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Duncan',
      type: 'dog',
      isPet: true,
    };
    let count = 0;
    _.each(obj, (val, key, obj) => {
      expect(val).toBe(obj[key]);
      count++;
    });
    expect(count).toBe(3);
  });
});

