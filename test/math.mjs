import test from 'ava'
import {
  min,
  max,
  sum,
  product
} from './../math'

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
