const min = arr => Math.min(...arr)

const max = arr => Math.max(...arr)

const sum = arr => arr.reduce((a, b) => a + b)

const product = arr => arr.reduce((a, b) => a * b)

export {
  min,
  max,
  sum,
  product
}
