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

export { getValues, merge, toMap }
