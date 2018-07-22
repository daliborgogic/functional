import test from 'ava'
import {
  combine,
  compact,
  difference,
  head,
  initial,
  intersection,
  last,
  sortedIndex,
  tail,
  union,
  unique,
  without,
  getValues,
  toMap,
  min,
  max,
  sum,
  product,
  not,
  maybe,
  once,
  curry,
  pipeline
} from './functional'

// Array utils /////////////////////////////////////////////////////////////////

test('combine', t =>
  t.deepEqual(combine(['foo'], ['bar', 'baz'], [1, 2]), ['foo', 'bar', 'baz', 1, 2])
)

test('compact', t =>
  t.deepEqual(compact([0, 1, false, 2, '', 3]), [1, 2, 3])
)

test('difference', t =>
  t.deepEqual(difference([1, 2, 3, 4, 5], [5, 2, 10]), [1, 3, 4])
)

test('head', t =>
  t.deepEqual(head(['foo', 'bar']), 'foo')
)

test('initial', t =>
  t.deepEqual(initial([3, 2, 1]), [3, 2])
)

test('intersection', t =>
  t.deepEqual(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]), [1, 2])
)

test('last', t =>
  t.deepEqual(last(['foo', 'bar' ]), 'bar')
)

test('sortedIndex', t =>
  t.deepEqual(sortedIndex([10, 20, 30, 40, 50], 35), 3)
)

test('tail', t =>
  t.deepEqual(tail(['foo', 'bar', 'baz']), ['bar', 'baz'])
)


test('union', t =>
  t.deepEqual(union([1, 2, 3], [101, 2, 1, 10], [2, 1]), [1, 2, 3, 101, 10])
)

test('unique', t =>
  t.deepEqual(unique([1, 2, 1, 3, 1, 4]), [1, 2, 3, 4])
)

test('without', t =>
  t.deepEqual(without([1, 2, 1, 0, 3, 1, 4], 0, 1), [2, 3, 4])
)

// Object utils ////////////////////////////////////////////////////////////////

test('getValues', t =>
  t.deepEqual(getValues({ foo: 'bar', hello: 'world' }), ['bar', 'world'])
)

// ToDo: toMap
// test('toMap', t => {})

// Math ////////////////////////////////////////////////////////////////////////

test('min', t =>
  t.deepEqual(min([10, 50, 30]), 10)
)

test('max', t =>
  t.deepEqual(max([10, 50, 30]), 50)
)

test('sum', t =>
  t.deepEqual(sum([10, 50, 30]), 90)
)

test('product', t =>
  t.deepEqual(product([10, 50, 30]), 15000)
)

// Function decorators /////////////////////////////////////////////////////////

test('not', t => {
  const isNull = x => x == null
  const isSet = not(isNull)
  t.deepEqual(isSet(undefined), false)
})

// ToDo: maybe
// test('maybe', t => {})

// ToDo: once
// test('once', t => {})

test('curry', t => {
  const add = curry((a, b) => a + b)
  t.deepEqual(add(2, 3), 5)
  t.deepEqual(add(2)(3), 5)
})

test('pipeline', t => {
  const plus1 = a => a + 1
  const mult2 = a => a * 2
  let addThenMult = pipeline(plus1, mult2)
  t.deepEqual(addThenMult(5), 12)
})
