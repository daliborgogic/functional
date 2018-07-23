/**
 * Minimum value in the `array`.
 *
 * @category Math
 * @param {Array} array The array to query.
 * @returns {*} Returns the minimum value in the `array`.
 * @example
 *
 * min([10, 50, 30])
 * // => 10
 */
const min = arr => Math.min(...arr)

/**
 * Maximum value in the `array`.
 *
 * @category Math
 * @param {Array} array The array to query.
 * @returns {*} Returns the maximum value in the array.
 * @example
 *
 * max([10, 50, 30])
 * // => 30
 */
const max = arr => Math.max(...arr)

/**
 * Maximum value in the `array`.
 *
 * @category Math
 * @param {Array} array The array to query.
 * @returns {*} Returns the sum of all values in the `array`.
 * @example
 *
 * sum([10, 50, 30])
 * // => 90
 */
const sum = arr => arr.reduce((a, b) => a + b)

/**
 * Product of all values in the `array`.
 *
 * @category Math
 * @param {Array} array The array to query.
 * @returns {*} Returns the product of all values in the `array`.
 * @example
 *
 * product([10, 50, 30])
 * // => 15000
 */
const product = arr => arr.reduce((a, b) => a * b)

export { min,max,sum,product }
