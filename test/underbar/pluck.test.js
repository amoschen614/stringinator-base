const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { 
        name: 'dp',
        age: 16
      },
      { name: 'felix',
        age: 99
      }
    ];
    const ages = _.pluck(people, 'age');
    expect(ages).toEqual([16, 99]);
  });

});