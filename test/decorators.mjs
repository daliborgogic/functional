import test from 'ava'
import {
  not,
  // ToDo maybe,
  // ToDo once,
  curry,
  pipeline
} from './../decorators'

test('not', t => {
  const isNull = x => x == null
  const isSet = not(isNull)
  t.deepEqual(isSet(undefined), false)
})

test('curry', t => {
  const add = curry((a, b) => a + b)
  t.deepEqual(add(2, 3), 5)
})

test('pipeline', t => {
  const plus1 = a => a + 1
  const mult2 = a => a * 2
  let addThenMult = pipeline(plus1, mult2)
  t.deepEqual(addThenMult(5), 12)
})
