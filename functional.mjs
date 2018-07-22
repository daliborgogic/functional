// Array utils /////////////////////////////////////////////////////////////////

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

// Object utils ////////////////////////////////////////////////////////////////

const getValues = obj => Object.keys(obj).map(key => obj[key])

const merge = (() => {
  const extend = Object.assign ? Object.assign : (target, ...sources) => {
    sources.forEach(source =>
      Object.keys(source).forEach(prop => target[prop] = source[prop]) // eslint-disable-line no-return-assign
    )
    return target
  }
  return (...objects) => extend({}, ...objects)
})()

const toMap = (() => {
  const convert = obj => new Map(Object.keys(obj).map(key => [key, obj[key]]))
  return obj => obj instanceof Map ? obj : convert(obj)
})()

// Math ////////////////////////////////////////////////////////////////////////

const min = arr => Math.min(...arr)

const max = arr => Math.max(...arr)

const sum = arr => arr.reduce((a, b) => a + b)

const product = arr => arr.reduce((a, b) => a * b)

// Function decorators /////////////////////////////////////////////////////////

const not = fn => (...args) => !fn(...args)

const maybe = fn =>
  (...args) => {
    if (args.length < fn.length || args.some(arg => arg == null)) return
    return fn(...args)
  }

const once = fn => {
  let done = false
  return (...args) => {
    if (done) return
    done = true
    fn(...args)
  }
}

const curry = fn => {
  const arity = fn.length
  const curried = (...args) =>
    args.length < arity ? (...more) => curried(...args, ...more) : fn(...args)
  return curried
}

const pipeline = (...funcs) =>
  value => funcs.reduce((a, b) => b(a), value)

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
  without,
  getValues,
  merge,
  product,
  toMap,
  min,
  max,
  sum,
  not,
  maybe,
  once,
  curry,
  pipeline
}
