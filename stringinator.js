const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, ch => ch === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, ch => ch === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, ch => !isNaN(parseInt(ch)));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str, ch => !isNaN(parseInt(ch))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  return _.map(obj, el => truncateString(el, maxLength));
};

const countChars = function(str) {
  return _.reduce(str, (result, ch) => {
    result[ch] = !!result[ch] ? result[ch] + 1 : 1;
    return result;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};