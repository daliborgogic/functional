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
  toArray,
  union,
  unique,
  without
} from './../array'

test('combine', t => {
  const fn = combine(['foo'], ['bar', 'baz'], [1, 2])
  const expected = ['foo', 'bar', 'baz', 1, 2]
  t.deepEqual(fn, expected)
})

test('compact', t => {
  const fn = compact([0, 1, false, 2, '', 3])
  const expected = [1, 2, 3]
  t.deepEqual(fn, expected)
})

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
  t.deepEqual(last(['foo', 'bar']), 'bar')
)

test('sortedIndex', t =>
  t.deepEqual(sortedIndex([10, 20, 30, 40, 50], 35), 3)
)

test('tail', t =>
  t.deepEqual(tail(['foo', 'bar', 'baz']), ['bar', 'baz'])
)

test('toArray', t => {
  const args = []
  t.deepEqual(Array.isArray((() => toArray(args))('foo', 'bar')), true)
})

test('union', t =>
  t.deepEqual(union([1, 2, 3], [101, 2, 1, 10], [2, 1]), [1, 2, 3, 101, 10])
)

test('unique', t =>
  t.deepEqual(unique([1, 2, 1, 3, 1, 4]), [1, 2, 3, 4])
)

test('without', t =>
  t.deepEqual(without([1, 2, 1, 0, 3, 1, 4], 0, 1), [2, 3, 4])
)
