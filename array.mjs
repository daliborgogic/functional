/**
 * Combine multiple arrays into one array.
 *
 * @category Array
 * @param {...Arrary}
 * @returns {Array} Returns `Array`.
 * @example
 *
 * const a = ['foo']
 * const b = ['bar', 'baz']
 * const c = [1, 2]
 *
 * combine(a, b, c)
 * // => ['foo', 'bar', 'baz', 1, 2]
 */
const combine = (...arrays) => [].concat(...arrays)

const compact = arr => arr.filter(Boolean)

const contains = (() => Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(el => el === value)
)()

const difference = (arr, ...others) => {
  var combined = [].concat(...others)
  return arr.filter(el => !combined.some(exclude => el === exclude))
}

/**
 * Gets the first element of `array`.
 *
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * head(['foo', 'bar'])
 * // => 'foo'
 *
 * head([])
 * // => undefined
 */
const head = arr => arr[0]

const initial = arr => arr.slice(0, -1)

const intersection = (...arrays) =>
  [...new Set([].concat(...arrays))].filter(toFind =>
    arrays.every(arr => arr.some(el => el === toFind))
  )

const last = arr => arr.slice(-1)[0]

const sortedIndex = (arr, value) =>
  [value].concat(arr).sort().indexOf(value)

const tail = arr => arr.slice(1)

const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))()

const union = (...arrays) => [...new Set([].concat(...arrays))]

const unique = arr => [...new Set(arr)]

const without = (arr, ...values) =>
  arr.filter(el => !values.some(exclude => el === exclude))

export {
  combine,
  compact,
  contains,
  difference,
  head,
  initial,
  intersection,
  last,
  sortedIndex,
  tail,
  toArray,
  union,
  unique,
  without
}
