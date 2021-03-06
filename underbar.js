// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, Math.min(array.length, n));
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(array.length - Math.min(array.length, n));
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  let result = -1;
  each(array, el => {
    if(el === target && result === -1) {
      result = fromIndex;
    }
    fromIndex++;
  });
  return result;
};

const isArrayLike = function(obj) {
  const length = obj['length'];
  return !!length && length > 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if (isArrayLike(obj)) {
    for (let i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  let result = [];
  each(obj, el => result.push(callback(el)));
  return result;
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  let result = [];
  each(obj, el => result.push(el[key]));
  return result;
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {

  each(obj, (accumulator, index, obj) => {
    if (initialValue === undefined) {
      initialValue = accumulator;
    } else {
      initialValue = callback(initialValue, obj[index], index, obj);
    }
  });
  return initialValue;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  let isFound = false;
  each(obj, el => {
    isFound = (el === target) || isFound;
  });
  return isFound;
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  let areAllValid = true;
  each(obj, el => {
    areAllValid = callback(el) && areAllValid;
  });
  return areAllValid;
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  let isOneValid = false;
  each(obj, el => {
    isOneValid = callback(el) || isOneValid;
  });
  return isOneValid;
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  let result = [];
  each(obj, el => {
    if (callback(el)) {
      result.push(el);
    }
  });
  return result;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  return filter(arr, el => !callback(el));
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  let result = [];
  every(obj, el => {
    if (!contains(result, el)) {
      result.push(el)
    }
  });
  return result;
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
