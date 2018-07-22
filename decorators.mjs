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
  not,
  maybe,
  once,
  curry,
  pipeline
}
